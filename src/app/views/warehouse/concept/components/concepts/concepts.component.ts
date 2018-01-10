import { ConceptService } from 'app/services/concept.service';
import { Concept } from 'app/models/concept';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  @ViewChild('myTable') table: any;

  public concepts: Concept[];
  public temp: any = [];
  public selectedFilter = 'description';
  public filterBy = [
    { value: 'concept_number', name: 'Número de partida' },
    { value: 'description', name: 'Descripción' }
  ]
  
  // For debounce purpose
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;

  constructor( private conceptService: ConceptService ) {
    this.subject  = new BehaviorSubject<string>(this.searchTextValue);
   }

  ngOnInit() {
    this.getConcepts();
    this.debounce();
  }

  getConcepts(): void {
    this.conceptService.all()
      .subscribe( data => {

        this.temp = [...data];
        this.concepts = data;

        console.log('this.concepts: ', this.concepts);

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
        this.concepts = temp;
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
