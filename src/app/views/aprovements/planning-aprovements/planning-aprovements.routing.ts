import { LoggedUserGuard } from './../../../guards/logged-user.guard';
import { GUARDS } from './../../../guards/_guards';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanningAprovementsComponent } from './planning-aprovements.component';

const routes: Routes = [
    {
        path: '',
        data: {
            guards: [ GUARDS.PLANNING_DEPARTMENT ]
        },
        canActivate:  [ LoggedUserGuard ],
        component: PlanningAprovementsComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanningAprovementsdRoutingModule { }

export const routedComponents = [PlanningAprovementsComponent];
