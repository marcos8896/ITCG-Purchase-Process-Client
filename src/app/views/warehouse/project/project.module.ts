import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project.routing';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectShowComponent } from './components/project-show/project-show.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  imports: [
    ProjectRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProjectComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectShowComponent,
    ProjectsComponent,
  ]
})
export class ProjectModule { }
