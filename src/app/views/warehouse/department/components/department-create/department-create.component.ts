import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { ViewChild } from '@angular/core';

import { DepartmentService } from 'app/services/department.service';
import { SubdirectionService } from 'app/services/subdirection.service';
import { BossDepartmentService } from 'app/services/boss-department.service';

import { SubdirectionModule } from 'app/views/warehouse/subdirection/subdirection.module';
import { SubdirectionComponent } from 'app/views/warehouse/subdirection/subdirection.component';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss']
})
export class DepartmentCreateComponent implements OnInit {
  @ViewChild('nombreInput') name: any;
  @ViewChild('moneyInput') number: any;
  @ViewChild('selectInput, selectBoss') Selection: any;
  // Subdirections array
  public subdirections;
  // Bosses array
  public bosses
  constructor( 
    private departmentService: DepartmentService, 
    private subdirectionService: SubdirectionService, 
    private bossDepartment: BossDepartmentService,
    private toastr: ToastrService ) {
      this.subdirectionService.getAll()
      .subscribe( subdirection => this.subdirections = subdirection )
      
  }

  ngOnInit() {
    this.getBosses()
  }
  getBosses(){
    this.bossDepartment.getAll()
    .subscribe( bosses  => this.bosses = bosses )
  }
  onSubmitDepartment( values ) {
    this.departmentService.create( values )
    .subscribe( res => {
        if ( res ) {
          this.showSuccess()
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
