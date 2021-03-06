import { ConceptsComponent } from './components/concepts/concepts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptComponent } from './concept.component';
import { ConceptCreateComponent } from 'app/views/warehouse/concept/components/concept-create/concept-create.component';
import { ConceptShowComponent } from 'app/views/warehouse/concept/components/concept-show/concept-show.component';
import { ConceptEditComponent } from 'app/views/warehouse/concept/components/concept-edit/concept-edit.component';

const routes: Routes = [
  {
    path: 'create',
    component: ConceptCreateComponent,
    data: {
      title: 'Registrar partida'
    }
  },
  {
    path: 'show',
    component: ConceptShowComponent,
    data: {
      title: 'Consultar partida'
    }
  },
  {
    path: 'edit/:id',
    component: ConceptEditComponent,
    data: {
      title: 'Editar partida'
    }
  },
  {
    path: 'all',
    component: ConceptsComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConceptRoutingModule {}