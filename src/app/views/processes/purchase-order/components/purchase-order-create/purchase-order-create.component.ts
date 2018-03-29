import { ViewChild } from '@angular/core/';
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
  public selectedProviderRequisitionDetails: any [] = [];
  public emitSelectedProvider$ = new Subject();

  public miDate: Date = new Date();

  public providerIsSelected: boolean = false;

  public columnsProvider: any[] = [
    { name: 'ID', prop: 'id'} , 
    { name: 'Nombre', prop: 'name'}
  ];

  public columnsConceptRequisitions: any[] = [
    { name: 'Cantidad', prop: 'quantity'} , 
    { name: 'Unidad', prop: 'unit'},
    { name: 'Description', prop: 'description'},
    { name: 'Folio de requisición', prop: 'folioRequisition'},
    { name: 'Departamento', prop: 'nameDepartment'},
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
        folio: { "neq":  null },
       },
      include: [
        { relation: 'provider' },
        { relation: 'concept_requisition' },
        {
          relation: 'boss_department',
          scope: {
          fields: ['id'],
            include: {
                relation: 'department',
                scope: {
                    fields: ['name', 'boss_departmentId'],
                }
            }
          }
        }
      ]
    }).subscribe( requistions => { 

      this.requisitions = requistions;
      this.providers = this.requisitions.map( requisition => requisition.provider );
      
    })
  }


  
  loadSelectedProviderRequisitions() {
    
    this.emitSelectedProvider$
      .subscribe((provider:any) => {

        this.selectedProvider = [ provider ];
        this.providerIsSelected = true;

        let requisitionsSelectedProvider = [ ... this.getSelectedProviderRequisitions(provider) ];

        requisitionsSelectedProvider = this.addFolioAndDepartmentToConcepts( requisitionsSelectedProvider );

        this.selectedProviderRequisitionDetails = [];
        
        //Little hack to avoid wrong rezising on the 'selectedProviderRequisitionDetails' table.
        setTimeout(() => {
          this.selectedProviderRequisitionDetails = [ ... this.getConceptRequisitionsSelectedProvider(requisitionsSelectedProvider) ];
        }, 0);
        
      })

  }

  
  getSelectedProviderRequisitions( provider: any ): any[] {
    return this.requisitions.filter( requisition => requisition.provider.id == provider.id )
  }


  getConceptRequisitionsSelectedProvider( requisitionsSelectedProvider: any[] ) :any[] {
    return requisitionsSelectedProvider
    .map( requisition => requisition.concept_requisition)
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue),[]);

  }


  selectedElementHandler( element: any[]) {
    this.emitSelectedProvider$.next(element[0]);
  }


  //Add Folio and department to requisitions
  addFolioAndDepartmentToConcepts( requisitionsSelectedProvider: any[] ): any [] {

    requisitionsSelectedProvider.forEach( requisition => {

      if(requisition.concept_requisition) {
        requisition.concept_requisition.forEach( concept => {
          concept.folioRequisition = requisition.folio;
          concept.nameDepartment = requisition.boss_department.department.name;
        })
      }

    })

    return requisitionsSelectedProvider;
  }

  


}
