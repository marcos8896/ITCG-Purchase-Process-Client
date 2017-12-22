import { navigation } from './../../../../../_nav';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ProgramService } from 'app/services/program.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-program-create',
  templateUrl: './program-create.component.html',
  styleUrls: ['./program-create.component.scss']
})
export class ProgramCreateComponent implements OnInit {
  @ViewChild('descriptionInput') description: any;
  @ViewChild('numberInput') number: any;
  constructor( private programService: ProgramService, private toastr: ToastrService ) { 
   }

  ngOnInit() {
  }

  onSubmitProgram( values ) {
    console.log(values)
    this.programService.create( values )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()
          this.description.nativeElement.value = ''
          this.number.nativeElement.value = ''
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
