import { CommonModule } from '@angular/common';
import { RolesService } from './services/roles.service';
import { NgModule } from '@angular/core';
import { RolesRoutingModule } from './roles.routing';

import { RolesComponent } from './roles.component';

@NgModule({
    imports: [
        CommonModule,
        RolesRoutingModule
    ],
    declarations: [
        RolesComponent
    ],
    providers: [
        RolesService
    ]
})
export class RolesModule { }
