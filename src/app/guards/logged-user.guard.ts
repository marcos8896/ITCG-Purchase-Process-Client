import { ToastrService } from 'ngx-toastr';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class LoggedUserGuard implements CanActivate {
    
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private toastrService: ToastrService
    ) { }
    
    canActivate( activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot ) {
        if ( this.authenticationService.isLoggedIn() ) {
            return true
        }

        this.showError()
        this.router.navigate(['/login'], { queryParams: { returnUrl: routerStateSnapshot.url }});
        return false
    }

    showError() {
        this.toastrService.error('Debes iniciar sesión para acceder', 'No has iniciado sesión')
    }
}
