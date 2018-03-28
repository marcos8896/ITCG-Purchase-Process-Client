import { Provider } from './../../../../../models/provider';
import { Requisition } from './../../../../../models/requisition';
import { RequisitionService } from './../../../../../services/requisition.service';
import { REQUISITION_STATES } from './../../../../../shared/_requisition_states';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-purchase-order-create',
  templateUrl: './purchase-order-create.component.html',
  styleUrls: ['./purchase-order-create.component.scss']
})
export class PurchaseOrderCreateComponent implements OnInit {

  public requisitions: Requisition[] = [];
  public providers: Provider[] = [];
  public selectedProvider: Provider [] = [];

  constructor(
    private requisitionService: RequisitionService,
  ) {
  }

  ngOnInit() {
    this.getRequisitionsWithProvider();
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
      console.log('this.providers: ', this.providers);
      console.log('this.requisitions: ', this.requisitions);
      
    })
  }

  columns: any[] = [
    { name: 'ID', prop: 'id'} , 
    { name: 'Nombre', prop: 'name'}
  ];

  providerTableMessages = {
    primaryTable: "Selecciona un proveedor",
    secondaryTable: "Proveedor seleccionado",
    noSelection: "Seleccione un proveedor, por favor"
  }

  selectedElementHandler( element ) {
    this.selectedProvider = element;
  }

  


}
