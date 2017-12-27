import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SubdirectionComponent } from './subdirection.component';
import { SubdirectionRoutingModule } from './subdirection.routing';
import { SubdirectionCreateComponent } from './components/subdirection-create/subdirection-create.component';
import { SubdirectionEditComponent } from './components/subdirection-edit/subdirection-edit.component';
import { SubdirectionShowComponent } from './components/subdirection-show/subdirection-show.component';
import { SubdirectionsComponent } from './components/subdirections/subdirections.component';

@NgModule({
  imports: [
    SubdirectionRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    SubdirectionComponent,
    SubdirectionCreateComponent,
    SubdirectionEditComponent,
    SubdirectionShowComponent,
    SubdirectionsComponent,
  ]
})
export class SubdirectionModule { }
