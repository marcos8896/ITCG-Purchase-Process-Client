import { NgModule } from '@angular/core';

import { PlanningAprovementsComponent } from './planning-aprovements.component';
import { PlanningAprovementsdRoutingModule } from './planning-aprovements.routing';

@NgModule({
    imports: [
        PlanningAprovementsdRoutingModule
    ],
    exports: [],
    declarations: [PlanningAprovementsComponent],
    providers: [],
})
export class PlanningAprovementsModule { }
