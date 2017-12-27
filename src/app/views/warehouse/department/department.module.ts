import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DepartmentComponent } from './department.component';
import { DepartmentRoutingModule } from './department.routing';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentShowComponent } from './components/department-show/department-show.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { DepartmentCreateComponent } from './components/department-create/department-create.component';

@NgModule({
  imports: [
    DepartmentRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    DepartmentComponent, 
    DepartmentCreateComponent, 
    DepartmentEditComponent, 
    DepartmentShowComponent, 
    DepartmentsComponent 
  ]
})
export class DepartmentModule { }
