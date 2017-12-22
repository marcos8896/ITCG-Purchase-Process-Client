import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project.routing';

@NgModule({
  imports: [
    ProjectRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProjectComponent,
  ]
})
export class ProjectModule { }
