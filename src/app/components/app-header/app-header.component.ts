import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  constructor( private authenticationService: AuthenticationService,
               private toastrService: ToastrService,
               private router: Router) { }

  ngOnInit() { }
  
  logout() {
    this.authenticationService.logout()
      .then( message => {
        this.showSuccess( message )
        this.router.navigate(['/login']);
      })
      .catch( error => {
        this.showError( "Sesión finalizada ;)" )
        this.router.navigate(['/login']);
      })
  }
  
  showSuccess( message ) {
    this.toastrService.success(message, 'Sesión terminada')
  }

  showError( error ) {
    this.toastrService.warning(error, '¡Ha numa!')
  }

}
