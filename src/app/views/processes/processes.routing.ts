import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessesComponent } from './processes.component';

const routes: Routes = [
  {
    path: 'requisition',
    loadChildren: './requisition/requisition.module#RequisitionModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessesRoutingModule {}
