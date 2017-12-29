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
        private toastrService: ToastrService
      ) {
        this.createForm()
       }

    
    createForm() {
        this.loginForm = this.formBuilder.group({
          username: ['', Validators.compose([Validators.required])],
          password: ['', Validators.compose([Validators.required])],
        })
      }
}
