import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProviderComponent } from './provider.component';
import { ProviderShowComponent } from './components/provider-show/provider-show.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ProviderRoutingModule } from './provider.routing';
import { ProviderEditComponent } from 'app/views/warehouse/provider/components/provider-edit/provider-edit.component';
import { ProviderCreateComponent } from 'app/views/warehouse/provider/components/provider-create/provider-create.component';

@NgModule({
  imports: [
    ProviderRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProvidersComponent,
    ProviderShowComponent,
    ProviderEditComponent,
    ProviderCreateComponent,
    ProviderComponent
  ]
})
export class ProviderModule { }
