import { GUARDS } from './guards/_guards';
import { LoggedUserGuard } from './guards/logged-user.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent,
  SessionLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SessionLayoutComponent,
    children: [
      {
        path: 'signin',
        loadChildren: './views/session/signin/signin.module#SigninModule'
      },
      {
        path: 'login',
        loadChildren: './views/session/login/login.module#LoginModule'
      },
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        data: {
          guards: [
            GUARDS.BOSS_DEPARTMENT,
            GUARDS.PLANNING_DEPARTMENT,
            GUARDS.VICE_PRINCIPAL,
          ]
        },
        canActivate:  [ LoggedUserGuard ],
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        data: {
          guards: [ GUARDS.PLANNING_DEPARTMENT ]
        },
        canActivate:  [ LoggedUserGuard ],
        path: 'warehouse',
        loadChildren: './views/warehouse/warehouse.module#WarehouseModule'
      },
      {
        data: {
          guards: [ GUARDS.PLANNING_DEPARTMENT ]
        },
        canActivate:  [ LoggedUserGuard ],
        path: 'roles',
        loadChildren: './views/users/roles/roles.module#RolesModule'
      },
      {
        data: {
          guards: [ GUARDS.BOSS_DEPARTMENT ]
        },
        canActivate:  [ LoggedUserGuard ],
        path: 'processes',
        loadChildren: './views/processes/processes.module#ProcessesModule'
      },
      {
        data: {
          guards: [ GUARDS.PLANNING_DEPARTMENT, GUARDS.VICE_PRINCIPAL ]
        },
        canActivate:  [ LoggedUserGuard ],
        path: 'aprovements',
        loadChildren: './views/aprovements/aprovements.module#AprovementsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
