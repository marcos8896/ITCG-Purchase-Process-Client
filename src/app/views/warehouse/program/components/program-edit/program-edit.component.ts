import { Component, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ToastrService } from 'ngx-toastr'
import { ProgramService } from 'app/services/program.service';
import { ProgramInterface } from 'app/models/program';

@Component({
  selector: 'app-program-edit',
  templateUrl: './program-edit.component.html',
  styleUrls: ['./program-edit.component.scss']
})
export class ProgramEditComponent implements OnInit {
  public id: any
  public program: ProgramInterface
  
  constructor(
    private programService: ProgramService,
    private route: ActivatedRoute, 
    private toastr: ToastrService, 
    private router: Router
  ) { 
    this.route.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.programService.findById( this.id )
        .subscribe( program => this.program = program )
      }
    })
  }

  ngOnInit() {
  }
  
  onSubmitProgram(){
    this.programService.update( this.program )
    .subscribe ( res => {
      if ( res ) {
        this.showSuccess()
        this.router.navigate(['/warehouse/program/all']);
      }
    },
    data => this.showError(data.console.error.message),
    () => console.log('Completed'))
  }

  showSuccess() {
    this.toastr.success('Registro editado exitosamente', '¡Registro editado!')
  }

  showError( error ) {
    this.toastr.error(error, '¡Ha numa!')
  }

}
