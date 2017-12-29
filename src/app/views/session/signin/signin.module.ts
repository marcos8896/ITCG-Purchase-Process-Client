import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SigninRoutingModule
  ],
  declarations: [ SigninComponent ]
})
export class SigninModule { }
