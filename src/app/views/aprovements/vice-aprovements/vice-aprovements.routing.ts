import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViceAprovementsComponent } from './vice-aprovements.component';

const routes: Routes = [
  { path: '', component: ViceAprovementsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ViceAprovementsRoutingModule { }

