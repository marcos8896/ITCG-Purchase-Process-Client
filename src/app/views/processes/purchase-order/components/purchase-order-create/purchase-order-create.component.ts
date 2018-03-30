import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ToastrService } from 'ngx-toastr';

import { REQUISITION_STATES } from './../../../../../shared/_requisition_states';

import { RequisitionService } from './../../../../../services/requisition.service';
import { PurchaseOrderService } from './../../../../../services/purchase-order.service';

import { Provider } from './../../../../../models/provider';
import { Requisition } from './../../../../../models/requisition';

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

  public purchaseOrder:any = {
    date: new Date()
  };

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


  constructor( private requisitionService: RequisitionService, 
               private purchaseOrderService: PurchaseOrderService,
               private toastrService: ToastrService
  ) { }


  ngOnInit() {
    this.getRequisitionsWithRelatedModels();
    this.loadSelectedProviderRequisitions();
  }


  /**
   * 
   * Gets all the requisitions that are accepted by the boss_deparment,
   * accepted by the planning department and have a folio currently.
   * This method also includes to the requisitions the 'provider',
   * 'concept_requisition' normal relationships and a nested one
   * that includes the related 'boss_deparment' with his or her 'deparment'.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @param {*}
   * @memberof PurchaseOrderCreateComponent
   */
  getRequisitionsWithRelatedModels(){
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


  /**
   * 
   * Load the selected provider' requisitions by subscribing to the 'emitSelectedProvider'
   * Subject which emits the current selected provider every time is selected
   * on the Providers Table from the template.
   * After a provider is selected this method makes all the array concerns to get a proper
   * array called selectedProviderRequisitionDetails objects that contains the fields
   * 'quantity', 'unit', 'description', 'folioRequisition' and 'nameDepartment' in order
   * to display them on the Requisition's Details Table
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @param {*}
   * @memberof PurchaseOrderCreateComponent
   */
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


  /**
   * 
   * Gets the current selected provider' requisitions from the main requisitions array.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @param provider The current provider selected from the Providers Table.
   * @returns {Requisition[]} A new array which contains all the requisitions that 
   * belong to the current selected provider.
   * @memberof PurchaseOrderCreateComponent
   */
  getSelectedProviderRequisitions( provider: any ): any[] {
    return this.requisitions.filter( requisition => requisition.provider.id === provider.id )
  }


  /**
   * 
   * Get all the Concept_Requisitions (Requisitions details) from the requisitions
   * that are related to the current selected provider.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @param requisitionsSelectedProvider - An array with the requisitions that belong
   * to a certain provider, in this case, the current selected provider. This array
   * has to contain a sub-array with the concept_requisitions
   * @returns {any[]} A new array which contains all the concept_requisitions from the
   * requisitions that belong to the current selected provider.
   * @memberof PurchaseOrderCreateComponent
  */
  getConceptRequisitionsSelectedProvider( requisitionsSelectedProvider: any[] ) :any[] {
    return requisitionsSelectedProvider
    .map( requisition => requisition.concept_requisition)
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue),[]);

  }


  /**
   * 
   * This handler method receives the selected provider from the child 'app-selectable-table' 
   * component and pass it to the 'emitSelectedProvider$' Subject.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @param element An array which only contains on element. This element is the one that is
   * selected on the 'app-selectable-table' component.
   * @returns {*}
   * @memberof PurchaseOrderCreateComponent
  */
  selectedElementHandler( element: any[]) {
    this.emitSelectedProvider$.next(element[0]);
  }


  /**
   * Adds folioRequistion, requisitionId, boss_departmentId, and nameDeparment to the concept_requisition sub-array
   * on the requisitionsSelectedProvider array.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @param {Requisition[]} requisitionsSelectedProvider An array which contains all 
   * the requisitions that belong to the current selected provider.
   * @returns {any[]} A new array which contains all the requisitions that belong
   * to the current selected provider with their concept_requisition containing the
   * folioRequistion, requisitionId, boss_departmentId, and nameDeparment properties.
   * @memberof PurchaseOrderCreateComponent
  */
  addFolioAndDepartmentToConcepts( requisitionsSelectedProvider: any[] ): any [] {

    requisitionsSelectedProvider.forEach( requisition => {

      if(requisition.concept_requisition) {
        requisition.concept_requisition.forEach( concept => {
          concept.folioRequisition = requisition.folio;
          concept.requisitionId = requisition.id;
          concept.nameDepartment = requisition.boss_department.department.name;
          concept.boss_departmentId = requisition.boss_department.id;
        })
      }

    })

    return requisitionsSelectedProvider;
  }


  /**
   * Removes the 'folio' and 'nameDeparment' properties from the 'concept_requisition'
   * before sending the data to the API.
   * @author Marcos Barrera del Río <elyomarcos@gmail.com>
   * @returns {any[]} A new array which only contains the 'quantity', 'unit' and
   * 'description' properties on its objects.
   * @memberof PurchaseOrderCreateComponent
   */
  filterDetailsBeforeSubmit( requisitionDetails: any[] ) {
    return this.selectedProviderRequisitionDetails.map( re => {
      return { 
        quantity: re.quantity, 
        unit: re.unit, 
        description: re.description,
        requisitionId: re.requisitionId,
        boss_departmentId: re.boss_departmentId
       }
    })
  }


  onSubmit() {
    this.purchaseOrder.purchase_order_requisition = 
      this.filterDetailsBeforeSubmit(this.selectedProviderRequisitionDetails);

    this.purchaseOrder.provider = this.selectedProvider[0];

    console.log('this.purchaseOrder: ', this.purchaseOrder);
    this.purchaseOrderService.create(this.purchaseOrder)
    .subscribe( res => {
      if ( res ) this.showSuccess()
    },
    data => this.showError(data.error.message),
    () => console.log('Completed'))

  }

  showSuccess() {
    this.toastrService.success('Registro agregado exitosamente', '¡Registro agregado!')
  }

  showError( error ) {
    this.toastrService.error(error, '¡Ha numa!')
  }

}
