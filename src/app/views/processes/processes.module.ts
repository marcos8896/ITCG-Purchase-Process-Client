import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ProcessesComponent } from './processes.component';
import { ProcessesRoutingModule } from './processes.routing';

@NgModule({
  imports: [
    ProcessesRoutingModule,
    ChartsModule
  ],
  declarations: [ ProcessesComponent ]
})
export class ProcessesModule { }