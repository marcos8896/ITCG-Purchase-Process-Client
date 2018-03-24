import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptancesComponent } from './acceptances.component';

const routes: Routes = [
  {
    path: 'vice',
    loadChildren: './vice/vice.module#ViceModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceptancesRoutingModule {}