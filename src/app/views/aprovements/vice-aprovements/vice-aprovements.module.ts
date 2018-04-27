import { SharedAprovementsModule } from './../shared/shared-aprovements.module';
import { DateParserService } from './../../../services/date-parser.service';
import { SelectableTableModule } from './../../../shared/selectable-table/selectable-table.module';
import { NgModule } from '@angular/core';
import { ViceAprovementsRoutingModule } from './vice-aprovements.routing';

// Custom Components
import { ViceAprovementsComponent } from './vice-aprovements.component';

// Modules
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ViceAprovementsRoutingModule,
        CommonModule,
        SharedAprovementsModule,
    ],
    exports: [],
    declarations: [
        ViceAprovementsComponent,
    ],
    providers: [
        DateParserService
    ],
})
export class ViceAprovementsModule { }
