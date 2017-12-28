import { SubdirectionService } from 'app/services/subdirection.service';
import { Subdirection } from 'app/models/subdirection';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';

@Component({
  selector: 'app-subdirections',
  templateUrl: './subdirections.component.html',
  styleUrls: ['./subdirections.component.scss']
})
export class SubdirectionsComponent implements OnInit {

  @ViewChild('myTable') table: any;

  
  public subdirections: Subdirection[];
  public temp: any = [];
  public selectedFilter = "name";
  public filterBy = [ 
    { value: "id", name: "ID" }, 
    { value: "name", name: "Nombre de departamento" }, 
    { value: "boss_name", name: "Jefe de departamento" }
  ]

  constructor( private subdirectionService: SubdirectionService ) { }

  ngOnInit() {
    this.getSubdirections();
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

  updateFilter(  event ) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val );

    // update the rows
    this.subdirections = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
