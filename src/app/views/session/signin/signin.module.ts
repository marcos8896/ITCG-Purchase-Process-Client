import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin.routing';
import { SessionSharedModule } from 'app/views/session/shared/session-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SigninRoutingModule,
    SessionSharedModule
  ],
  declarations: [
    SigninComponent,
    
  ]
})
export class SigninModule { }