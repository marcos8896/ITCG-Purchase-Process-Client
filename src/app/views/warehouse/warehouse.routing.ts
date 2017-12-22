import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { WarehouseComponent } from './warehouse.component';

const routes: Routes = [
  {
    path: 'concept',
    loadChildren: './concept/concept.module#ConceptModule'
  },
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule {}