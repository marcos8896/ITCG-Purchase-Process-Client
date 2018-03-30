import { LoggedUserGuard } from './../../../guards/logged-user.guard';
import { GUARDS } from './../../../guards/_guards';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViceAprovementsComponent } from './vice-aprovements.component';
import { RequisitionDetailsComponent } from './components/requisition-details/requisition-details.component';

const routes: Routes = [
  { 
    path: '',
    component: ViceAprovementsComponent,
    data: {
      guards: [ GUARDS.VICE_PRINCIPAL ]
    },
    canActivate:  [ LoggedUserGuard ]
  },
  {
    path: 'requisition-details/:id',
    component: RequisitionDetailsComponent,
    data: {
      guards: [ GUARDS.VICE_PRINCIPAL ]
    },
    canActivate:  [ LoggedUserGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ViceAprovementsRoutingModule { }

