import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentCreateComponent } from 'app/views/warehouse/department/components/department-create/department-create.component';
import { DepartmentEditComponent } from 'app/views/warehouse/department/components/department-edit/department-edit.component';
import { DepartmentShowComponent } from 'app/views/warehouse/department/components/department-show/department-show.component';
import { DepartmentsComponent } from 'app/views/warehouse/department/components/departments/departments.component';


const routes: Routes = [
  {
    path: 'create',
    component: DepartmentCreateComponent,
    data: {
      title: 'Registrar departamento'
    }
  },
  {
    path: 'show/:id',
    component: DepartmentShowComponent,
    data: {
      title: 'Consultar departamento'
    }
  },
  {
    path: 'edit/:id',
    component: DepartmentEditComponent,
    data: {
      title: 'Editar departamento'
    }
  },
  {
    path: 'all',
    component: DepartmentsComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule {}