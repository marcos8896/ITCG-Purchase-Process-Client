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
  
  onSubmitProvider() {
    this.providerService.update( this.provider )
      .subscribe( res => {
        if ( res ) {
<<<<<<< HEAD
          this.showSuccess()
          this.router.navigate(['/warehouse/provider/all']);
=======
          this.showSuccess() 
          console.log('me jui')
          this.router.navigate(['/warehouse/provider/all']);//no jala Cx
>>>>>>> aa7caacb642c26765650e4816a1d9517ecc3f050
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
