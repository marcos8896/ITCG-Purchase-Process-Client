import { ViewChild } from '@angular/core/';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, EventEmitter, Input, Output, OnChanges, OnInit, SimpleChanges, SimpleChange } from '@angular/core';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-selectable-table',
  templateUrl: './selectable-table.component.html',
  styleUrls: ['./selectable-table.component.scss']
})
export class SelectableTableComponent implements OnChanges, OnInit {

  @Input() rows: any [];
  @Input() columns: any [];
  @Input() selected: any [];
  @Input() selectionType: string;
  @Input() messages: Object;

  @Output() selectedElement: EventEmitter<any[]> = new EventEmitter();

  @ViewChild('myTable') table: any;


  //Filtering concerns
  public temp: any = [];
  public selectedFilter = '';
  public isTheRowsArrayFiltered = false;

  // For debounce purpose
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;

  constructor() { 
    this.subject  = new BehaviorSubject<string>(this.searchTextValue);
  }


  ngOnInit() {
    console.log('ngOnInit: ');
    this.selectedFilter = this.columns[0].prop;
    this.debounce();

  }

  ngOnChanges(changes: SimpleChanges) {

    for (let property in changes) {
      if (property === 'rows') {

        if( changes['rows'].currentValue.length > 0 && !this.isTheRowsArrayFiltered ) {
          // console.log("En if");
          // console.log('this[rows]: ', this['rows']);
          // this['rows'] = this.removeDuplicates(this['rows']);
          // console.log('this[rows]: ', this['rows']);
          this.temp = [ ...this['rows'] ];
          this.isTheRowsArrayFiltered = true;
        }
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
      } 
  }

  }


  onSelect({ selected }) {
    this.selected = [ ...selected ];
    this.selectedElement.emit(this.selected);
  }


  debounce() {
    // Subscribe to observable for debounce
    this.subject.debounceTime(400).subscribe( searchTextValue => {
      if ( searchTextValue !== undefined ) {
        const val = searchTextValue.toLocaleLowerCase();
        
        // filter our data
        const temp = this.temp.filter( element => {
          console.log('element[this.selectedFilter].toString().toLowerCase(): ', element[this.selectedFilter].toString().toLowerCase());
          return element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val


        } );
        console.log('temp: ', temp);
        
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }
    })
  }


  updateFilter() {
    this.subject.next(this.searchTextValue);
  }

//   removeDuplicates(a) {
//     return a.reduce(function(a,b){
//       if (a.indexOf(b) < 0 ) a.push(b);
//       return a;
//     },[]);
// }

  logear() {
    console.log('rows: ', this.rows);
    console.log('temp: ', this.temp);
    console.log('columns: ', this.columns);
    console.log('this.selectedFilter: ', this.selectedFilter);
  }

}
