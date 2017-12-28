import { Provider } from 'app/models/provider';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProviderService } from 'app/services/provider.service';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  @ViewChild('myTable') table: any;
  
  public providers: Provider[] = []
  public temp:any = []
  public selectedFilter = "name";
  public filterBy = [ 
    { value: "id", name: "ID" }, 
    { value: "name", name: "Nombre del Proveedor" }
  ]

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.providerService.all()
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

  updateFilter(  event ) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val );

    // update the rows
    this.providers = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
