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
    private router: Router
  ) { }
  
  // Promisify logout method
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
