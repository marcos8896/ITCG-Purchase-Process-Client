import { RadioRoleInterface } from './../shared/models/radio-role.interface';
import { RoleRadioComponent } from './../shared/components/role-radio/role-radio.component';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';
import { ViewChild } from '@angular/core/';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
  // Get properties from RoleRadioComponent
  @ViewChild(RoleRadioComponent)
  public roleRadioComponent: RoleRadioComponent

  // FormGroup for validation form purposes
  public loginForm: FormGroup
  constructor( 
      private formBuilder: FormBuilder,
      private userService: UserService,
      private toastrService: ToastrService,
      private authenticationService: AuthenticationService,
      private router: Router
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
    const lastEndpointEntry = this.roleRadioComponent.selectedRole.endPoint
    this.authenticationService.login( values.email, values.password, lastEndpointEntry)
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()
          this.router.navigate(['/dashboard'])
        }
      },
      data => this.showError( data.error.message ),
      () => console.log('Completed'))
  }

  showSuccess() {
    this.toastrService.success('Has ingresado correctamente', '¡Bienvenido!')
  }

  showError( error ) {
    this.toastrService.error('Hubo un error al intentar iniciar sesión, por favor, verifica tus credenciales.', '¡Ha numa!')
  }
}
