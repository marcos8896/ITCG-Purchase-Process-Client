import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordValidation } from './validations/password-validation';
import { UserService } from 'app/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'signin.component.html'
})
export class SigninComponent {
  public signinForm: FormGroup

  constructor( 
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService
  ) {
    this.createForm()
   }

  createForm() {
    this.signinForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      passwordConfirm: ['', Validators.compose([Validators.required])]
    }, {
      validator: PasswordValidation.matchPassword
    })
  }

  onSubmitSignin( values ) {
    this.userService.create( values )
      .subscribe( res => {
        console.log(res)
        if ( res )
          this.showSuccess()
      },
      data => this.showError(data.error.message),
      () => console.log('Registered'))
  }

  showSuccess() {
    this.toastrService.success('Se ha registrado exitosamente', '¡Registro agregado!')
  }

  showError( error ) {
    this.toastrService.error(error, '¡Ha numa!')
  }

}
