import { ProgramShowComponent } from './components/program-show/program-show.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ProgramEditComponent } from './components/program-edit/program-edit.component';
import { ProgramCreateComponent } from './components/program-create/program-create.component';

import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ProgramComponent } from './program.component';

const routes: Routes = [
  {
    path: 'create',
    component: ProgramCreateComponent,
    data: {
      title: 'Registrar programa'
    }
  },
  {
    path: 'edit',
    component: ProgramEditComponent,
    data: {
      title: 'Editar programa'
    }
  },
  {
    path: 'show',
    component: ProgramShowComponent,
    data: {
      title: 'Consultar programa'
    }
  },
  {
    path: 'all',
    component: ProgramsComponent,
    data: {
      title: 'Consulta general'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule {}