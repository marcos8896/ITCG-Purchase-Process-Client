import { InputOutputsComponent } from './components/input-outputs/input-outputs.component';
import { InputOutputComponent } from './input-output.component';
import { InputOutputCreateComponent } from './components/input-output-create/input-output-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputOutputAllGeneratedComponent } from 'app/views/processes/input-output/components/input-output-all-generated/input-output-all-generated.component';
import { InputOutputShowComponent } from 'app/views/processes/input-output/components/input-output-show/input-output-show.component';

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
  },
  {
    path: 'all-generated',
    component: InputOutputAllGeneratedComponent,
    data: {
      title: 'Entradas/Salidas Generadas'
    }
  },
  {
    path: 'show/:id',
    component: InputOutputShowComponent,
    data: {
      title: 'Consulta Entradas/Salidas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputOutputRoutingModule {}