import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ProjectService } from 'app/services/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  @ViewChild('descriptionInput') description: any;
  @ViewChild('projectNumberInput') projectNumber: any;

  constructor( private projectService: ProjectService, private toastrService: ToastrService ) { }

  ngOnInit() {
  }

  onSubmitProject( values ) {
    this.projectService.create( values )
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
