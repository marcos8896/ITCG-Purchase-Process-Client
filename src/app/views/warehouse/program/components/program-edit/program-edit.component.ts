import { Component, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute, 
    private toastr: ToastrService, 
    private router: Router
  ) { 
      this.getUrlId();
  }

  ngOnInit() {
  }
  
  getUrlId() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.programService.findById( this.id )
          .subscribe( project => this.program = project )
      }
    })
  }
  
  onSubmitProgram(){
    this.programService.update( this.program )
    .subscribe ( res => {
      if ( res ) {
        this.showSuccess()
        this.router.navigate(['/warehouse/program/all']);
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
