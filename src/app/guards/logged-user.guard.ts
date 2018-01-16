import { ToastrService } from 'ngx-toastr';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class LoggedUserGuard implements CanActivate {
    
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private toastrService: ToastrService
    ) { }
    
    canActivate( activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot ) {
        // Contain all guards (roles) allowed to access
        const guards = activatedRouteSnapshot.data.guards;
        
        // Check if the role stored in local storage 
        // matches with any element of the guard array with 
        // the roles allowed to access
        if ( guards.includes(JSON.parse(localStorage.getItem('ITCG_role'))) )
            return true;
        
        this.showError();
        this.router.navigate(['/login'], { queryParams: { returnUrl: routerStateSnapshot.url }});
        return false;
    }

    showError() {
        this.toastrService.error('Inicia sesión correctamente para acceder', 'Sesión inválida');
    }
}
