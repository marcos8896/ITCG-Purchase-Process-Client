import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';

import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectShowComponent } from './components/project-show/project-show.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectsComponent } from 'app/views/warehouse/project/components/projects/projects.component';

const routes: Routes = [
  {
    path: 'create',
    component: ProjectCreateComponent,
    data: {
      title: 'Registrar proyecto'
    }
  },
  {
    path: 'show',
    component: ProjectShowComponent,
    data: {
      title: 'Mostrar proyecto'
    }
  },
  {
    path: 'edit',
    component: ProjectEditComponent,
    data: {
      title: 'Editar proyecto'
    }
  },
  {
    path: 'all',
    component: ProjectsComponent,
    data: {
      title: 'Consulta general'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
