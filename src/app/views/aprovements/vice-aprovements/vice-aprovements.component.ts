import { SubdirectionService } from 'app/services/subdirection.service';
import { VicePrincipalService } from './../../../services/vice-principal.service';
import { BossDepartmentService } from 'app/services/boss-department.service';
import { RequisitionService } from './../../../services/requisition.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'app-vice-aprovements',
    templateUrl: './vice-aprovements.component.html'
})

export class ViceAprovementsComponent implements OnInit {
    // public requisitions: any[] = [];
    // public allRequisitions: any[] = [];
  
    // public selectedFilter = 'status';
    // public filterBy = [
    //   { value: 'status', name: 'Estado de requisición' },
    //   { value: 'provider', name: 'Proveedor' }
    // ]
    
    // private subject: BehaviorSubject<string>;
    // public searchTextValue: string;
  
    // @ViewChild('myTable') table: any;
    public departments: any[];

    constructor( 
        // private requisitionService: RequisitionService,
        private vicePrincipalService: VicePrincipalService
    ) { 
        // this.subject  = new BehaviorSubject<string>(this.searchTextValue);
        this.departments = [];        
    }
    
    ngOnInit() {
        this.getRequisitions();
        // this.debounce();
    }

    // onCancel( id ){
    //     if (confirm('¿Está seguro de querer cancelar esa requisicion?')) {
    //       const deleteRequi = this.allRequisitions.find( requi => requi.id === id )
    //       deleteRequi.status = 'Cancelada'
    //       this.requisitionService.update( deleteRequi )
    //       .subscribe( res => {
    //         this.filterRequisitions();
    //       })      
    //     }    
    // }
    
    getRequisitions() {
        this.vicePrincipalService.getRequisitionsToSign()
            .subscribe( res => {
                this.departments = res.result.subdirection.department;
            })
    }
    // // getRequisitions(){
    // //     this.bossDepartmentService.findById(
    // //       JSON.parse(localStorage.getItem('ITCG_userId')), { 
    // //       include: ['requisition'] 
    // //     }).subscribe( res => { 
    // //       this.allRequisitions = [...res.requisition];
    // //       this.requisitions = res.requisition; 
    
    // //       console.log('res: ', res);
    
    // //       this.requisitions.forEach( (element, i) => {
    // //         this.requisitionService.findById( element.id, {
    // //           include: ['provider', 'concept_requisition']
    // //         }).subscribe(re => {
    // //           element.concept_requisition = re.concept_requisition
    // //           element.provider = re.provider
              
    // //         })
    // //       });  
    // //       this.filterRequisitions();
          
    // //     })
    // // }
    
    // filterRequisitions(){
    //     this.requisitions = this.requisitions.filter( requi => requi.status === 'Esperando' )
    // }

    // toggleExpandRow(row) {
    //     this.table.rowDetail.toggleExpandRow(row);
    // }
    
    // onDetailToggle( event ) {
    //     console.log('event: ', event);
    // }
    
    // updateFilter() {
    //     this.subject.next(this.searchTextValue);
    // }
    
    // debounce() {
    //     // Subscribe to observable for debounce
    //     this.subject.debounceTime(400).subscribe( searchTextValue => {
    //         if ( searchTextValue !== undefined ) {
    //         const val = searchTextValue.toLocaleLowerCase();
    
            
            
    //         // filter our data
    //         const temp = (  this.selectedFilter === 'provider' ) ? 
    //         this.allRequisitions.filter( element => element[this.selectedFilter].name.toString().toLowerCase().indexOf(val) !== -1 || !val ) :
    //         this.allRequisitions.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val ) 
    //         // update the rows
    //         this.requisitions = temp;
    //         // Whenever the filter changes, always go back to the first page
    //         this.table.offset = 0;
    //         }
    //     })
    // }
    
}
