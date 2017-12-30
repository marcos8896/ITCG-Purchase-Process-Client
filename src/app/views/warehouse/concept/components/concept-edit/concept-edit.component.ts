import { Component, OnInit } from '@angular/core';
import { ConceptService } from 'app/services/concept.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { Concept } from 'app/models/concept';

@Component({
  selector: 'app-concept-edit',
  templateUrl: './concept-edit.component.html',
  styleUrls: ['./concept-edit.component.scss']
})
export class ConceptEditComponent implements OnInit {

  public id: any;
  public concept: Concept;

  constructor(
    private conceptService: ConceptService, private route: ActivatedRoute,
    private toastr: ToastrService, private router: Router
  ) { }

  ngOnInit() {
    this.getUrlId();
  }

  getUrlId() {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      if ( this.id ) {
        this.conceptService.findById( this.id )
          .subscribe( concept => 
            this.concept = concept,
          err => {
            this.showError('Ese registro no se encuentra en nuestra base de datos :(');
            setTimeout(() => this.router.navigateByUrl('/warehouse/concept/all'), 4000);
          })
      }
    })
  }

  onSubmitConcept() {
    this.conceptService.update( this.concept )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess();
          this.router.navigate(['/warehouse/concept/all']);
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
