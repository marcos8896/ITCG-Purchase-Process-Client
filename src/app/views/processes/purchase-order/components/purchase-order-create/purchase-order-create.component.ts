import { Provider } from './../../../../../models/provider';
import { Requisition } from './../../../../../models/requisition';
import { RequisitionService } from './../../../../../services/requisition.service';
import { REQUISITION_STATES } from './../../../../../shared/_requisition_states';
import { ViewChild } from '@angular/core/';
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
  // public allRequisitions: any[] = [];

  // public selectedFilter = 'status';
  // public filterBy = [
  //   { value: 'status', name: 'Estado de requisición' },
  //   { value: 'provider', name: 'Proveedor' }
  // ]
  
  private subject: BehaviorSubject<string>;
  // public searchTextValue: string;

  // @ViewChild('myTable') table: any;

  constructor(
    private requisitionService: RequisitionService,
  ) {
    // this.subject  = new BehaviorSubject<string>(this.searchTextValue);
  }

  ngOnInit() {
    this.getRequisitionsWithProvider();
    // this.debounce();
  }

  getRequisitionsWithProvider(){
    console.log("Before")
    this.requisitionService.getAll({
      where: { 
        check_boss: REQUISITION_STATES.ACEPTADA,
        check_planning: REQUISITION_STATES.ACEPTADA,
        //Not equals to null
        folio: { "neq":  null }
       },
      include: ['provider']
    }).subscribe( requistions => { 
      this.requisitions = requistions;
      this.providers = this.requisitions.map( requisition => requisition.provider );
      console.log('this.providers: ', this.providers);
      console.log('this.requisitions: ', this.requisitions);
      
    })
  }

  // selected = [];

  columns: any[] = [
    { name: 'ID', prop: 'id'} , 
    { name: 'Nombre', prop: 'name'}
  ];

  onSelect({ selected }) {
    console.log('Select Event', selected);
  }

    


}
