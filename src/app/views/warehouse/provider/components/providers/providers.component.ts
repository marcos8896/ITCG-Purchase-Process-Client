import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Provider } from 'app/models/provider';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProviderService } from 'app/services/provider.service';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  @ViewChild('myTable') table: any;
  
  public providers: Provider[]
  public temp:any = []
  public selectedFilter = "name";
  public filterBy = [ 
    { value: "id", name: "ID" }, 
    { value: "name", name: "Nombre del Proveedor" }
  ]

  // For debounce purpose
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;

  constructor(private providerService: ProviderService) {
    this.subject  = new BehaviorSubject<string>(this.searchTextValue);
   }

  ngOnInit() {
    this.getProviders();
    this.debounce();
  }

  getProviders() :void {
    this.providerService.getAll()
      .subscribe( res => {
        this.temp = [...res];
        this.providers = res;
      }); 
  }

  onDetailToggle( event ) {
    console.log('event: ', event);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  debounce() {
    this.subject.debounceTime(400).subscribe( searchTextValue => {
      if ( searchTextValue !== undefined ) {
        const val = searchTextValue.toLowerCase();
        
        // filter our data
        const temp = this.temp.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val );
    
        // update the rows
        this.providers = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }
    })
  }

  updateFilter() {
    this.subject.next(this.searchTextValue);
  }
}
