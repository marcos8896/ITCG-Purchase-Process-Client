import { AprovementsRoutingModule } from './aprovements.routing';
import { NgModule } from '@angular/core';

import { AprovementsComponent } from './aprovements.component';

@NgModule({
    imports: [
        AprovementsRoutingModule
    ],
    exports: [],
    declarations: [AprovementsComponent],
    providers: [],
})
export class AprovementsModule { }
