import { SubdirectionService } from './../../../../../services/subdirection.service';
import { Subdirection } from './../../../../../models/subdirection';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-subdirections',
  templateUrl: './subdirections.component.html',
  styleUrls: ['./subdirections.component.scss']
})
export class SubdirectionsComponent implements OnInit {

  @ViewChild('myTable') table: any;

  public subdirections: Subdirection[];
  public temp: any = [];
  public selectedFilter = 'name';
  public filterBy = [
    { value: 'id', name: 'ID' },
    { value: 'name', name: 'Nombre de departamento' },
    { value: 'boss_name', name: 'Jefe de departamento' }
  ]
  
  // For debounce purpose
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;

  constructor( private subdirectionService: SubdirectionService ) {
    this.subject  = new BehaviorSubject<string>(this.searchTextValue);
   }

  ngOnInit() {
    this.getSubdirections();
    // Subscribe to observable for debounce
    this.subject.debounceTime(400).subscribe( searchTextValue => {
      if ( searchTextValue !== undefined ) {
        const val = searchTextValue.toLocaleLowerCase();
      
        // filter our data
        const temp = this.temp.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val );
    
        // update the rows
        this.subdirections = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }
    })
  }

  getSubdirections(): void {
    this.subdirectionService.all()
      .subscribe( data => {

        this.temp = [...data];
        this.subdirections = data;

        console.log('this.subdirections: ', this.subdirections);

      });
  }

  onDetailToggle( event ) {
    console.log('event: ', event);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  updateFilter() {
    this.subject.next(this.searchTextValue);
  }

}
