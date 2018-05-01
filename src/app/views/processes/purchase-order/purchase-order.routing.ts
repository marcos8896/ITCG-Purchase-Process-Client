// import { RequisitionsComponent } from './../requisition/components/requisitions/requisitions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrderCreateComponent } from './components/purchase-order-create/purchase-order-create.component';
import { PurchaseOrdersComponent } from './components/purchase-orders/purchase-orders.component';
import { PurchaseOrderShowComponent } from './components/purchase-order-show/purchase-order-show.component';

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
  {
    path: 'all',
    component: PurchaseOrdersComponent,
    data: {
      title: 'Seleccionar requisiciones'
    }
  },
  {
    path: 'show/:id',
    component: PurchaseOrderShowComponent,
    data: {
      title: 'Consultar orden de compra'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule {}