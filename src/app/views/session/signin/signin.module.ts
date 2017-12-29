import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SigninRoutingModule
  ],
  declarations: [ SigninComponent ]
})
export class SigninModule { }