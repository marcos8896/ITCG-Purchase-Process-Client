import { ViceRequisitionsComponent } from './components/vice-requisitions/vice-requisitions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'all',
    component: ViceRequisitionsComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViceRoutingModule {}