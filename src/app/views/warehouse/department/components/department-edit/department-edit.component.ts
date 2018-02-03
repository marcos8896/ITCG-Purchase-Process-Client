import { BossDepartmentService } from 'app/services/boss-department.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DepartmentInterface } from 'app/models/deparment';
import { DepartmentService } from 'app/services/department.service';
import { SubdirectionService } from './../../../../../services/subdirection.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {
  public id: any;
  public department: DepartmentInterface
  // Subdirections array
  public subdirections;
  //Bosses array
  public bosses;

  constructor(
    private departmentService: DepartmentService,
    private subdirectionService: SubdirectionService,
    private bossDepartment: BossDepartmentService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService, 
    private router: Router
  ) {
    this.getUrlId();
    this.subdirectionService.getAll()
      .subscribe(subdirection => this.subdirections = subdirection)
   }

  ngOnInit() {
    this.getBosses()
  }
  getBosses(){
    this.bossDepartment.getAll( )
    .subscribe( bosses  => this.bosses = bosses )
  }
  getUrlId() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if( this.id ) {
        this.departmentService.findById( this.id )
        .subscribe( department => this.department = department )
      }
    })
  }

  onSubmitDepartment(){
    this.departmentService.update( this.department )
    .subscribe( res => {
      if( res ) {
        this.showSuccess()
        this.router.navigate(['/warehouse/department/all']);
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
