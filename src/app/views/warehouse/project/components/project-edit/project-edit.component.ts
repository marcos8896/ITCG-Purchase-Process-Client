import { ProjectInterface } from './../../../../../models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'app/services/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  public id: string;
  public project: ProjectInterface;

  constructor(
    private projectService: ProjectService,
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
        this.projectService.findById( this.id )
          .subscribe( project => this.project = project )
      }
    })
  }

  onSubmitProject() {
    this.projectService.update( this.project )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()
          this.router.navigate(['/warehouse/project/all']);
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
