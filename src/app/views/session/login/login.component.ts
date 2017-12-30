import { AuthenticationService } from 'app/services/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {

  public loginForm: FormGroup
  
  constructor( 
      private formBuilder: FormBuilder,
      private userService: UserService,
      private toastrService: ToastrService,
      private authenticationService: AuthenticationService
    ) {
      this.createForm()
      }
  
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    })
  }

  onSubmitLogin( values ) {
    this.authenticationService.login( values.email, values.password )
      .subscribe( res => {
        console.log( res )
      },
      error => console.log('Error: ', error),
      () => console.log('Completed'))
  }
}
