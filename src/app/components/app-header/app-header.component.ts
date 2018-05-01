import { BossDepartmentService } from 'app/services/boss-department.service';
import { VicePrincipalService } from './../../services/vice-principal.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {

  public userLogged: any

  constructor( private authenticationService: AuthenticationService,
               private vicePrincipalService: VicePrincipalService,
               private toastrService: ToastrService,
               private bossDepartmentService: BossDepartmentService,
               private router: Router) { }

  ngOnInit() {
    this.getUser()
   }

  getUser(){
    var role = JSON.parse(localStorage.getItem("ITCG_role"))
    if ( role != 'planningdepartment' )
      role == 'viceprincipal' ? this.getVice() : this.getBoss();    
  }

  getVice(){
    this.vicePrincipalService.findById(
      JSON.parse(localStorage.getItem("ITCG_userId")),
      { include: ['subdirection'] }
    ).subscribe( res => this.userLogged = res )   
  }

  getBoss(){
    this.bossDepartmentService.findById(
      JSON.parse(localStorage.getItem("ITCG_userId")),
      { include: ['department'] }
    ).subscribe( res => this.userLogged = res)
  }
  
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
