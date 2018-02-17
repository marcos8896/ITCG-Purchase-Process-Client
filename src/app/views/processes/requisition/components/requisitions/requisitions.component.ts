import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RequisitionService } from './../../../../../services/requisition.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BossDepartmentsService } from 'app/services/boss-department';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-requisitions',
  templateUrl: './requisitions.component.html',
  styleUrls: ['./requisitions.component.scss']
})
export class RequisitionsComponent implements OnInit {

  public requisitions: any[] = [];
  public allRequisitions: any[] = [];

  public selectedFilter = "status";
  public filterBy = [
    { value: 'status', name: 'Estado de requisición' },
    { value: 'provider', name: 'Proveedor' }
  ]
  
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;

  @ViewChild('myTable') table: any;

  constructor( 
    private requisitionService: RequisitionService,
    private bossDepartmentService: BossDepartmentsService
   ) { 
    this.subject  = new BehaviorSubject<string>(this.searchTextValue);
   }

  ngOnInit() {
    this.getRequisitions();
    this.debounce();
  }

  onCancel( id ){
    if (confirm('¿Está seguro de querer cancelar esa requisicion?')) {
      let deleteRequi = this.allRequisitions.find( requi => requi.id == id )
      deleteRequi.status = 'Cancelado'
      this.requisitionService.update( deleteRequi )
      .subscribe( res => {
        this.filterRequisitions();
      })      
    }    
  }

  getRequisitions(){
    this.bossDepartmentService.findById(
      JSON.parse(localStorage.getItem("ITCG_userId")), { 
      include: ['requisition'] 
    }).subscribe( res => { 
      this.allRequisitions = [...res.requisition];
      this.requisitions = res.requisition; 

      console.log('res: ', res);

      this.requisitions.forEach( (element, i) => {
        this.requisitionService.findById( element.id, {
          include: ['provider','concept_requisition']
        }).subscribe(re => {
          element.concept_requisition = re.concept_requisition
          element.provider = re.provider
          
        })
      });  
      this.filterRequisitions();
      
    })
  }

  filterRequisitions(){
    this.requisitions = this.requisitions.filter( requi => requi.status === 'Esperando' )
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
