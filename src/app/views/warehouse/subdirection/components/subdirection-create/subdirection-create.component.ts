import { Component, OnInit } from '@angular/core';
import { SubdirectionService } from 'app/services/subdirection.service';
import { ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subdirection-create',
  templateUrl: './subdirection-create.component.html',
  styleUrls: ['./subdirection-create.component.scss']
})
export class SubdirectionCreateComponent implements OnInit {
  @ViewChild('boss_nameInput') boss_name: any;
  @ViewChild('nameInput') name: any;

  constructor( private subdirectionService: SubdirectionService, private toastrService: ToastrService ) { }

  ngOnInit() {
  }

  onSubmitSubdirection( values ) {
    this.subdirectionService.create( values )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()
        }
      },
      data => this.showError(data.error.message),
      () => console.log('Completed'))
  }

  showSuccess() {
    this.toastrService.success('Registro agregado exitosamente', '¡Registro agregado!')
  }

  showError( error ) {
    this.toastrService.error(error, '¡Ha numa!')
  }
}
