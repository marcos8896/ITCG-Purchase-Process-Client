import { RequisitionsComponent } from './../requisition/components/requisitions/requisitions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequisitionComponent } from './requisition.component';
import { RequisitionCreateComponent } from './components/requisition-create/requisition-create.component';

const routes: Routes = [
  {
    path: 'create',
    component: RequisitionCreateComponent,
    data: {
      title: 'Registrar requisición'
    }
  },
  {
    path: 'all',
    component: RequisitionsComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisitionRoutingModule {}