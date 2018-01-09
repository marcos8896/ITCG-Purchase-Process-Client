import { Subdirection } from 'app/models/subdirection';
import { BudgetKeyService } from 'app/services';
import { BudgetKeyInterface } from 'app/models/budget-key';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-budget-keys',
  templateUrl: './budget-keys.component.html',
  styleUrls: ['./budget-keys.component.scss']
})
export class BudgetKeysComponent implements OnInit {

  @ViewChild('myTable') table: any;
  
  public budgetKeys: BudgetKeyInterface[];
  public temp: any = [];
  public selectedFilter = 'name';
  public filterBy = [
    { value: 'budget_key_id', name: 'Clave presupuestal' },
    { value: 'piid_ojectives', name: 'Objetivos PI' },
    { value: 'subdirection', name: 'Subdirección' },
    { value: 'program', name: 'Programa' }
  ]

  // For debounce purpose
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;

  constructor( private budgetKeyService: BudgetKeyService ) { 
    this.subject = new BehaviorSubject<string>(this.searchTextValue);
  }

  someProperty:string = '';

  ngOnInit() {
    this.getBudgetKeys();
    this.debounce();
  }

  getBudgetKeys(): void {
    this.budgetKeyService.getBudgetKeysWithTheirSubdirectionPrograms()
      .subscribe( data => {
        this.temp = [...data];
        this.budgetKeys = data;
    });
  }

  debounce() {
    // Subscribe to observable for debounce
    this.subject.debounceTime(400).subscribe( searchTextValue => {
      if ( searchTextValue !== undefined ) {
        const val = searchTextValue.toLocaleLowerCase();
      
        // filter our data
        const temp = (this.selectedFilter !== "subdirection" || "program") ?
        this.temp.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val ):
        this.temp.filter( element => element[this.selectedFilter].name.toString().toLowerCase().indexOf(val) !== -1 || !val );
        // update the rows
        this.budgetKeys = temp;

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
