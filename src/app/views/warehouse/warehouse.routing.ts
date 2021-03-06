import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehouseComponent } from './warehouse.component';

const routes: Routes = [
  {
    path: 'concept',
    loadChildren: './concept/concept.module#ConceptModule'
  },
  {
    path: 'provider',
    loadChildren: './provider/provider.module#ProviderModule'
  },
  {
    path: 'program',
    loadChildren: './program/program.module#ProgramModule'
  },
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule'
  },
  {
    path: 'subdirection',
    loadChildren: './subdirection/subdirection.module#SubdirectionModule'
  },
  {
    path: 'department',
    loadChildren: './department/department.module#DepartmentModule'
  },
  {
    path: 'budget-key',
    loadChildren: './budget-key/budget-key.module#BudgetKeyModule'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule {}