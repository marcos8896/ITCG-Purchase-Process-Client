import { BudgetKeyComponent } from './budget-key.component';
import { BudgetKeyEditComponent } from './components/budget-key-edit/budget-key-edit.component';
import { BudgetKeyCreateComponent } from 'app/views/warehouse/budget-key/components/budget-key-create/budget-key-create.component';
import { BudgetKeysComponent } from 'app/views/warehouse/budget-key/components/budget-keys/budget-keys.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    component: BudgetKeyCreateComponent,
    data: {
      title: 'Registrar partida'
    }
  },
  {
    path: 'edit/:id',
    component: BudgetKeyEditComponent,
    data: {
      title: 'Editar partida'
    }
  },
  {
    path: 'all',
    component: BudgetKeysComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetKeyRoutingModule {}