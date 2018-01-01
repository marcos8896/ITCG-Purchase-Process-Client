import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { ViewChild } from '@angular/core';
import { ProviderService } from 'app/services/provider.service';

@Component({
  selector: 'app-provider-create',
  templateUrl: './provider-create.component.html',
  styleUrls: ['./provider-create.component.scss']
})
export class ProviderCreateComponent implements OnInit {

  constructor(private providerService: ProviderService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmitProvider( values ) {
    this.providerService.create( values )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()       
        }
      },
      data => this.showError(data.error.message),
      () => console.log('Completed'))
  }  

  showSuccess() {
    this.toastr.success('Registro agregado exitosamente', '¡Registro agregado!')
  }

  showError( error ) {
    this.toastr.error(error, '¡Ha numa!')
  }
}
