import { InputOutputsComponent } from './components/input-outputs/input-outputs.component';
import { InputOutputComponent } from './input-output.component';
import { InputOutputCreateComponent } from './components/input-output-create/input-output-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'all',
    component: InputOutputsComponent,
    data: {
      title: 'Seleccionar requisiciones'
    }
  },
  {
    path: 'create/:id',
    component: InputOutputCreateComponent,
    data: {
      title: 'Registrar Entrada-Salida'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputOutputRoutingModule {}