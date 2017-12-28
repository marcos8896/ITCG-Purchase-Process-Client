import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProgramComponent } from './program.component';
import { ProgramRoutingModule } from './program.routing';
import { ProgramCreateComponent } from './components/program-create/program-create.component';
import { ProgramEditComponent } from './components/program-edit/program-edit.component';
import { ProgramShowComponent } from './components/program-show/program-show.component';
import { ProgramsComponent } from './components/programs/programs.component';



@NgModule({
  imports: [
    ProgramRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    ProgramComponent,
    ProgramCreateComponent,
    ProgramEditComponent,
    ProgramShowComponent,
    ProgramsComponent,  
  ]
})
export class ProgramModule { }