import { SubdirectionService } from 'app/services/subdirection.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'app/services/project.service';
import { ProjectInterface } from 'app/models/project';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // Falta el template de projects
  @ViewChild('myTable') table: any;
  
  public projects: ProjectInterface [];
  public temp: any = [];
  public selectedFilter = 'project_number';
  public filterBy = [
    { value: 'id', name: 'ID' },
    { value: 'project_number', name: 'Número de proyecto' },
    { value: 'description', name: 'Descripción' }
  ]
    
  // For debounce purpose
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;

  constructor(
    private projectService: ProjectService,
    private subdirectionService: SubdirectionService
  ) {
    this.subject  = new BehaviorSubject<string>(this.searchTextValue);
   }

  ngOnInit() {
    this.getProjects();
    this.debounce();
  }

  getProjects(): void {
    this.projectService.getAll()
      .subscribe( data => {

        this.temp = [...data];
        this.projects = data;

        console.log('this.projects: ', this.projects);

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
        this.projects = temp;
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
