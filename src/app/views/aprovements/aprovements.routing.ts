import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprovementsComponent } from './aprovements.component';
import { ViceAprovementsComponent } from './vice-aprovements/vice-aprovements.component';

const routes: Routes = [
    { 
        path: 'vice-principal',
        loadChildren: 'app/views/aprovements/vice-aprovements/vice-aprovements.module#ViceAprovementsModule'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprovementsRoutingModule { }

