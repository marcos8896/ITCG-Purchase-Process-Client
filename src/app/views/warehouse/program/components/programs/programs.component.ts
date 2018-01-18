import { ProgramService } from 'app/services/program.service';
import { ProgramInterface } from 'app/models/program';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  @ViewChild('myTable') table: any;

  public programs: ProgramInterface[];
  public temp: any = [];
  public selectedFilter = 'name';
  public filterBy = [
    { value: 'id', name: 'ID' },
    { value: 'program_number', name: 'Numero de programa' },
    { value: 'description', name: 'Descripcion' }
  ]

  // For debounce purpose
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;
  
  constructor( private programService: ProgramService ) {
      this.subject = new BehaviorSubject<string>(this.searchTextValue);
     }

  ngOnInit() {
    this.getPrograms();
    this.debounce();
  }

  getPrograms(): void {
    this.programService.getAll()
      .subscribe( data => {
        this.temp = [...data];
        this.programs = data;

      console.log('this.programs: ', this.programs);
    });
  }

  debounce() {
    // Subscribe to observable for debounce
    this.subject.debounceTime(400).subscribe( searchTextValue => {
      if ( searchTextValue !== undefined ) {
        const val = searchTextValue.toLocaleLowerCase();
      
        // filter our data
        const temp = this.temp.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val );
    
        // update the rows
        this.programs = temp;

        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }
    })
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
