import { LoggedUserGuard } from './../../guards/logged-user.guard';
import { GUARDS } from './../../guards/_guards';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprovementsComponent } from './aprovements.component';
import { ViceAprovementsComponent } from './vice-aprovements/vice-aprovements.component';
import { RequisitionDetailsComponent } from './components/requisition-details/requisition-details.component';

const routes: Routes = [
    { 
        path: 'vice-principal',
        loadChildren: 'app/views/aprovements/vice-aprovements/vice-aprovements.module#ViceAprovementsModule'
    },
    { 
        path: 'planning',
        loadChildren: 'app/views/aprovements/planning-aprovements/planning-aprovements.module#PlanningAprovementsModule'
    },
    {
        path: 'requisition-details/:id',
        component: RequisitionDetailsComponent,
        data: {
          guards: [ GUARDS.VICE_PRINCIPAL, GUARDS.PLANNING_DEPARTMENT ]
        },
        canActivate:  [ LoggedUserGuard ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprovementsRoutingModule { }

