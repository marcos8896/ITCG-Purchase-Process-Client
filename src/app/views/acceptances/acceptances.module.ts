import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AcceptancesComponent } from './acceptances.component';
import { AcceptancesRoutingModule } from './acceptances.routing';

@NgModule({
  imports: [
    AcceptancesRoutingModule,
    ChartsModule
  ],
  declarations: [ AcceptancesComponent ]
})
export class AcceptancesModule { }