import { RolesService } from './services/roles.service';
import { NgModule } from '@angular/core';
import { RolesRoutingModule } from './roles.routing';

import { RolesComponent } from './roles.component';

@NgModule({
    imports: [
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
