import { NgModule } from '@angular/core';
import { ViceAprovementsRoutingModule } from './vice-aprovements.routing';

// Custom Components
import { ViceAprovementsComponent } from './vice-aprovements.component';
import { CollapseDepartmentComponent } from './components/collapse-departmen/collapse-departments.component';

// Modules
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ViceAprovementsRoutingModule,
        CommonModule,
        FormsModule,
        NgxDatatableModule,
        CollapseModule.forRoot()
    ],
    exports: [],
    declarations: [
        ViceAprovementsComponent,
        CollapseDepartmentComponent
    ],
    providers: [],
})
export class ViceAprovementsModule { }
