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
})
export class RolesModule { }
