import { ProvidersComponent } from './components/providers/providers.component';
import { ProviderComponent } from './provider.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderCreateComponent } from 'app/views/warehouse/provider/components/provider-create/provider-create.component';
import { ProviderShowComponent } from 'app/views/warehouse/provider/components/provider-show/provider-show.component';
import { ProviderEditComponent } from 'app/views/warehouse/provider/components/provider-edit/provider-edit.component';

const routes: Routes = [
  {
    path: 'create',
    component: ProviderCreateComponent,
    data: {
      title: 'Registrar partida'
    }
  },
  {
    path: 'show',
    component: ProviderShowComponent,
    data: {
      title: 'Consultar partida'
    }
  },
  {
    path: 'edit',
    component: ProviderEditComponent,
    data: {
      title: 'Editar partida'
    }
  },
  {
    path: 'all',
    component: ProvidersComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule {}