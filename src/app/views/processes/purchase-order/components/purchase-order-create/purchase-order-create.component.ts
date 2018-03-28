import { Provider } from './../../../../../models/provider';
import { Requisition } from './../../../../../models/requisition';
import { RequisitionService } from './../../../../../services/requisition.service';
import { REQUISITION_STATES } from './../../../../../shared/_requisition_states';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-purchase-order-create',
  templateUrl: './purchase-order-create.component.html',
  styleUrls: ['./purchase-order-create.component.scss']
})
export class PurchaseOrderCreateComponent implements OnInit {

  public providers: Provider[] = [];
  public selectedProvider: Provider [] = [];
  public requisitionsSelectedProvider: Requisition[] = [];
  public emitSelectedProvider$ = new Subject();

  public columnsProvider: any[] = [
    { name: 'ID', prop: 'id'} , 
    { name: 'Nombre', prop: 'name'}
  ];

  public providerTableMessages = {
    primaryTable: "Selecciona un proveedor",
    secondaryTable: "Proveedor seleccionado",
    noSelection: "Seleccione un proveedor, por favor"
  }

  public requisitions: Requisition[] = [];
  

  constructor( private requisitionService: RequisitionService ) { }


  ngOnInit() {
    this.getRequisitionsWithProvider();
    this.loadSelectedProviderRequisitions();
  }



  getRequisitionsWithProvider(){
    this.requisitionService.getAll({
      where: { 
        check_boss: REQUISITION_STATES.ACEPTADA,
        check_planning: REQUISITION_STATES.ACEPTADA,
        //Not equals to null
        folio: { "neq":  null }
       },
      include: ['provider', 'concept_requisition']
    }).subscribe( requistions => { 

      this.requisitions = requistions;
      this.providers = this.requisitions.map( requisition => requisition.provider );
      
    })
  }


  
  loadSelectedProviderRequisitions() {
    
    this.emitSelectedProvider$
      .subscribe((provider:any) => {

        this.requisitionsSelectedProvider = [ ... this.requisitions
          .filter( requisition => requisition.provider.id == provider.id ) ];
        
      })

  }


  selectedElementHandler( element: any[]) {
    this.emitSelectedProvider$.next(element[0]);
  }

  


}
