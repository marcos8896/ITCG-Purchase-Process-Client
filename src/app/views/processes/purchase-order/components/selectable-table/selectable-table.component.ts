import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selectable-table',
  templateUrl: './selectable-table.component.html',
  styleUrls: ['./selectable-table.component.scss']
})
export class SelectableTableComponent implements OnInit {

  @Input() rows: any [];
  @Input() columns: any [];
  @Input() selected: any [];
  @Input() selectionType: string;
  @Input() messages: Object;

  @Output() selectedElement: EventEmitter<any[]> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }


  onSelect({ selected }) {
    this.selected = [ ...selected ];
    this.selectedElement.emit(this.selected);
  }

}
