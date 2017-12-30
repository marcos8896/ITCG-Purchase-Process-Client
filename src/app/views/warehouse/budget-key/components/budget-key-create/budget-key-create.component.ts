import { ProgramService } from './../../../../../services/program.service';
import { SubdirectionService } from './../../../../../services/subdirection.service';
import { ProjectService } from 'app/services/project.service';
import { ProgramInterface } from './../../../../../models/program';
import { getTestBed } from '@angular/core/testing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BudgetKeyService} from 'app/services';
import { ProjectInterface } from 'app/models/project';
import { Subdirection } from 'app/models/subdirection';

@Component({
  selector: 'app-budget-key-create',
  templateUrl: './budget-key-create.component.html',
  styleUrls: ['./budget-key-create.component.scss']
})
export class BudgetKeyCreateComponent implements OnInit {
  public project: ProjectInterface;
  public program: ProgramInterface;
  public subdirections: Subdirection [];
  public programs: ProgramInterface [];
  public tempProjects: ProjectInterface[];
  public actions = [];
  @ViewChild('myTable') table: any;

  constructor(
    private budgetKeyService: BudgetKeyService, 
    private toastr: ToastrService,
    private projectService: ProjectService,
    private subdirectionService: SubdirectionService,
    private programService: ProgramService
  ) { }

  ngOnInit() {
    this.getSubdirections()
    this.getPrograms()
  }

  getSubdirections(): void {
    this.subdirectionService.all()
    .subscribe( data => {
      this.subdirections = data;
    });
  }

  getPrograms(): void {
    this.programService.getProgramsWithTheirProjects()
      .subscribe( data => this.programs = data);
  }

  projectSelected( project, program ) {
    this.program = program;
    this.project = project;
    this.toggleExpandRow( program )
  }

  onSubmitAddAction( values ) {
    values.action_number = this.actions.length + 1
    this.actions.push(values)
    console.log('this.actions: ', this.actions);

  }

  onSubmitBudgetKey( values ) {
    values.programId = this.program.id;
    values.projectId = this.project.id;    
    this.budgetKeyService.create( values )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()       
        }
      },
      data => this.showError(data.error.message),
      () => console.log('Completed'))      
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }
  
  onDetailToggle( event ) {
    console.log('event: ', event);
  }

  showSuccess() {
    this.toastr.success('Registro agregado exitosamente', '¡Registro agregado!')
  }

  showError( error ) {
    this.toastr.error(error, '¡Ha numa!')
  }

}
