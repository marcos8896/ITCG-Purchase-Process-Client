import { InputOutputService } from './services/input-output.service';
import { RequisitionService } from './services/requisition.service';

import { InputOutputDetailsService } from 'app/services/input-output-details.services';

import { ConceptRequisitionService } from 'app/services/concept-requisition.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent,
  SessionLayoutComponent,
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent,
  SessionLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  AppSessionFooterComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  AppSessionFooterComponent,
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Services
import {
  BasicRequestService,
  ConceptService,
  ProgramService,
  ProjectService,
  ProviderService,
  SubdirectionService,
  DepartmentService,
  UserService,
  AuthenticationService,
  BudgetKeyService,
  BudgetKeyDetailsService,
  BossDepartmentService,
  VicePrincipalService,
  PlanningService
} from './services'

const SERVICES = [
  BasicRequestService,
  ConceptService,
  ProgramService,
  ProjectService,
  ProviderService,
  SubdirectionService,
  DepartmentService,
  UserService,
  AuthenticationService,
  BudgetKeyService,
  BudgetKeyDetailsService,
  VicePrincipalService,
  BossDepartmentService,
  RequisitionService,
  ConceptRequisitionService,
  PlanningService,
  InputOutputService,
  InputOutputDetailsService
]

// Guards
import { LoggedUserGuard } from './guards'

const GUARDS = [
  LoggedUserGuard
]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    ...SERVICES,
    ...GUARDS,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
