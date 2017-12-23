import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubdirectionComponent } from './subdirection.component';

import { SubdirectionEditComponent } from './components/subdirection-edit/subdirection-edit.component';
import { SubdirectionShowComponent } from './components/subdirection-show/subdirection-show.component';
import { SubdirectionCreateComponent } from './components/subdirection-create/subdirection-create.component';
import { SubdirectionsComponent } from 'app/views/warehouse/subdirection/components/subdirections/subdirections.component';

const routes: Routes = [
  {
    path: 'create',
    component: SubdirectionCreateComponent,
    data: {
      title: 'Registrar subdirección'
    }
  },
  {
    path: 'show',
    component: SubdirectionShowComponent,
    data: {
      title: 'Mostrar subdirección'
    }
  },
  {
    path: 'edit',
    component: SubdirectionEditComponent,
    data: {
      title: 'Editar subdirección'
    }
  },
  {
    path: 'all',
    component: SubdirectionsComponent,
    data: {
      title: 'Consulta general'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubdirectionRoutingModule {}
