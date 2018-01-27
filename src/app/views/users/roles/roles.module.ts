import { CommonModule } from '@angular/common';
import { RolesService } from './services/roles.service';
import { NgModule } from '@angular/core';
import { RolesRoutingModule } from './roles.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserTableComponent } from 'app/views/users/roles/components/user-table/user-table.component';
import { RolesComponent } from './roles.component';

@NgModule({
    imports: [
        CommonModule,
        RolesRoutingModule,
        NgxDatatableModule
    ],
    declarations: [
        RolesComponent,
        UserTableComponent
    ],
    providers: [
        RolesService
    ]
})
export class RolesModule { }
