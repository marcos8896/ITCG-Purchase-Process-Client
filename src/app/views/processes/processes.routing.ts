import { LoggedUserGuard } from './../../guards/logged-user.guard';
import { GUARDS } from './../../guards/_guards';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessesComponent } from './processes.component';

const routes: Routes = [
  {
    data: {
      guards: [ GUARDS.BOSS_DEPARTMENT ]
    },
    canActivate:  [ LoggedUserGuard ],
    path: 'requisition',
    loadChildren: './requisition/requisition.module#RequisitionModule'
  },
  {
    data: {
      guards: [ GUARDS.PLANNING_DEPARTMENT ]
    },
    canActivate:  [ LoggedUserGuard ],
    path: 'purchase-order',
    loadChildren: './purchase-order/purchase-order.module#PurchaseOrderModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessesRoutingModule {}
