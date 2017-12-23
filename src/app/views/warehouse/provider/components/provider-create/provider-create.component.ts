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
  @ViewChild('nameInput') name: any;
  @ViewChild('phoneInput') phone: any;
  @ViewChild('addressInput') address: any;
  @ViewChild('emailInput') email: any;

  constructor(private providerService: ProviderService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmitProvider( values ) {
    this.providerService.create( values )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()
          this.name.nativeElement.value = ''
          this.phone.nativeElement.value = ''
          this.address.nativeElement.value = ''
          this.email.nativeElement.value = ''
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
