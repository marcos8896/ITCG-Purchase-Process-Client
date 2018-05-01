import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RequisitionService } from './../../../../../services/requisition.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BossDepartmentService } from 'app/services/boss-department.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-input-output-all-generated',
  templateUrl: './input-output-all-generated.component.html',
  styleUrls: ['./input-output-all-generated.component.scss']
})
export class InputOutputAllGeneratedComponent implements OnInit {

  public requisitions: any[] = [];
  public allRequisitions: any[] = [];

  public selectedFilter = 'provider';
  public filterBy = [
    { value: 'provider', name: 'Proveedor' }
  ]
  
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;

  @ViewChild('myTable') table: any;


  constructor(
    private requisitionService: RequisitionService
  ) {
    this.subject  = new BehaviorSubject<string>(this.searchTextValue);
   }

   ngOnInit() {
    this.getRequisitions();
    this.debounce();
  }

  getRequisitions(){    
    this.requisitionService.getAll({
      include: ['provider','concept_requisition'],
      where: {status: 'Facturado'}
    }).subscribe(res => {
      this.allRequisitions = [...res];
      this.requisitions = res;     
      
    })      
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle( event ) {
    console.log('event: ', event);
  }

  updateFilter() {
    this.subject.next(this.searchTextValue);
  }

  onGenerate( id ){
    console.log('id: ', id);

  }

  debounce() {
    // Subscribe to observable for debounce
    this.subject.debounceTime(400).subscribe( searchTextValue => {
      if ( searchTextValue !== undefined ) {
        const val = searchTextValue.toLocaleLowerCase();        
      
        // filter our data
         const temp = (  this.selectedFilter === 'provider' ) ? 
        this.allRequisitions.filter( element => element[this.selectedFilter].name.toString().toLowerCase().indexOf(val) !== -1 || !val ) :
        this.allRequisitions.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val ) 
        // update the rows
        this.requisitions = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }
    })
  }


}
