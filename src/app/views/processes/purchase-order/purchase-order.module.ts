import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { PurchaseOrderRoutingModule } from './purchase-order.routing';
import { SelectableTableComponent } from './components/selectable-table/selectable-table.component';
// import { RequisitionRoutingModule } from './requisition.routing';
// import { RequisitionCreateComponent } from './components/requisition-create/requisition-create.component';
// import { RequisitionsComponent } from 'app/views/processes/requisition/components/requisitions/requisitions.component';

@NgModule({
  imports: [
    PurchaseOrderRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    // RequisitionCreateComponent,
    // RequisitionsComponent  
    PurchaseOrderCreateComponent,
    SelectableTableComponent
  ]
})
export class PurchaseOrderModule { }