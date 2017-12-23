import { Component, OnInit, ViewChild } from '@angular/core';
import { ProviderService } from 'app/services/provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { Provider } from 'app/models/provider';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-provider-edit',
  templateUrl: './provider-edit.component.html',
  styleUrls: ['./provider-edit.component.scss']
})
export class ProviderEditComponent implements OnInit {
  id
  provider: Provider
  @ViewChild('phoneInput') phone: any;
  @ViewChild('addressInput') address: any;
  @ViewChild('emailInput') email: any;

  constructor(
    private providerService: ProviderService, 
    private route: ActivatedRoute, 
    private toastr: ToastrService, 
    private router: Router
  ) {
    this.route.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.providerService.findById( this.id )
          .subscribe( provider => this.provider = provider )         
      }
    })    
   }

  ngOnInit() {
  }
  //VINCULAR CON 
  onSubmitProvider() {
    this.providerService.update( this.provider )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()
          this.router.navigate(['../all']);//no jala Cx
        }
      },
      data => this.showError(data.error.message),
      () => console.log('Completed'))
  }

  showSuccess() {
    this.toastr.success('Registro editado exitosamente', '¡Registro editado!')
  }

  showError( error ) {
    this.toastr.error(error, '¡Ha numa!')
  }

}
