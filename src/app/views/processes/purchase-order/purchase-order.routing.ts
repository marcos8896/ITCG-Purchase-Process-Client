// import { RequisitionsComponent } from './../requisition/components/requisitions/requisitions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';

// import { RequisitionComponent } from './requisition.component';
// import { RequisitionCreateComponent } from './components/requisition-create/requisition-create.component';

const routes: Routes = [
  {
    path: 'create',
    component: PurchaseOrderCreateComponent,
    data: {
      title: 'Registrar orden de compra'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule {}