import { ViceAprovementsRoutingModule } from './vice-aprovements.routing';
import { NgModule } from '@angular/core';

import { ViceAprovementsComponent } from './vice-aprovements.component';

@NgModule({
    imports: [
        ViceAprovementsRoutingModule
    ],
    exports: [],
    declarations: [ViceAprovementsComponent],
    providers: [],
})
export class ViceAprovementsModule { }
