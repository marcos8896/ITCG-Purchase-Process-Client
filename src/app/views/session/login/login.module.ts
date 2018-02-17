import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from 'app/views/session/login/login.routing';
import { SessionSharedModule } from 'app/views/session/shared/session-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        SessionSharedModule
    ],
    declarations: [
        LoginComponent
    ],
})
export class LoginModule { }
