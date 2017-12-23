import { NgModule } from '@angular/core';

import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin.routing';

@NgModule({
  imports: [
    SigninRoutingModule
  ],
  declarations: [ SigninComponent ]
})
export class SigninModule { }
