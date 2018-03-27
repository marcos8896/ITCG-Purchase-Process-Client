import { ViewChild } from '@angular/core';
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
  @Input() enableFiltering: boolean;

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
    
    this.selectedFilter = this.columns[0].prop;
    this.debounce();

  }


  ngOnChanges(changes: SimpleChanges) {

    for (let property in changes) {
      if (property === 'rows') {

        if( changes['rows'].currentValue.length > 0 && !this.isTheRowsArrayFiltered ) {
          this['rows'] = [ ...this.removeDuplicates(this['rows']) ];
          this.temp = [ ...this['rows'] ];
          this.isTheRowsArrayFiltered = true;
        }

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
        const temp = this.temp.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val );
        
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


  removeDuplicates(arr) {
    var hashTable = {};

    return arr.filter(function (el) {
      var key = JSON.stringify(el);
      var match = Boolean(hashTable[key]);

      return (match ? false : hashTable[key] = true);
    });
  }

}
