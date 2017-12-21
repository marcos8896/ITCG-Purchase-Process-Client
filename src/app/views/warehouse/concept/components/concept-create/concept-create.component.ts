import { Component, OnInit } from '@angular/core'
import { ConceptService } from 'app/services/concept.service'
import { ToastrService } from 'ngx-toastr'
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-concept-create',
  templateUrl: './concept-create.component.html',
  styleUrls: ['./concept-create.component.scss']
})
export class ConceptCreateComponent implements OnInit {
  @ViewChild('descriptionInput') description: any;
  constructor( private conceptService: ConceptService, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  onSubmitConcept( values ) {
    this.conceptService.create( values )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()
          this.description.nativeElement.value = ''
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
