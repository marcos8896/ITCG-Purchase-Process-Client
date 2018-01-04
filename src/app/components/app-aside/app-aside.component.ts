import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAsideComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private toastrService: ToastrService,
    private router: Router
  ) { }
  
  logout() {
    this.authenticationService.logout()
      .then( message => {
        this.showSuccess( message )
        this.router.navigate(['/login']);
      })
      .catch( error => this.showError( error.message ))
  }
  
  showSuccess( message ) {
    this.toastrService.success(message, 'Sesión terminada')
  }

  showError( error ) {
    this.toastrService.error(error, '¡Ha numa!')
  }

}
