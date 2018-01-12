import { Subdirection } from 'app/models/subdirection';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import 'rxjs/add/operator/debounceTime';

import { SubdirectionService } from 'app/services/subdirection.service';
import { DepartmentService } from 'app/services/department.service';


import { DepartmentInterface } from 'app/models/deparment';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  @ViewChild('myTable') table: any;
 
  public departments: DepartmentInterface[];
  public temp: any = [];
  public selectedFilter = "name";
  public filterBy = [ 
    { value: "id", name: "ID" }, 
    { value: "name", name: "Nombre del departamento" },
    { value: "budget", name: "Presupuesto"},
    { value: "subdirection", name: "Subdirección"}
  ]

  // For debounce purpose
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;

  constructor( private departmentService: DepartmentService, private subdirectionService: SubdirectionService) { 
    this.subject = new BehaviorSubject<string>(this.searchTextValue);
  }

  someProperty:string = '';

  ngOnInit() {
    this.getDepartments();
    this.debounce();
  }

  getDepartments() :void {
    this.departmentService.getAll( '', ["subdirection"] )
      .subscribe( res => {
        this.temp = [...res];
        this.departments = res;
        console.log(this.departments)
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
        const temp = ( this.selectedFilter !== "subdirection" ) ? 
        this.temp.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val ) :
        this.temp.filter( element => element[this.selectedFilter].name.toString().toLowerCase().indexOf(val) !== -1 || !val )

        // update the rows
        this.departments = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }
    })
  }

  updateFilter() {
    this.subject.next(this.searchTextValue);
  }

}
