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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisitionRoutingModule {}