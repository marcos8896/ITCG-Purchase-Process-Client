import { BudgetKeyDetailsService } from './../../../../../services/budget-key-details.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProgramService } from './../../../../../services/program.service';
import { SubdirectionService } from './../../../../../services/subdirection.service';
import { ProjectService } from 'app/services/project.service';
import { ProgramInterface } from './../../../../../models/program';
import { getTestBed } from '@angular/core/testing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectInterface } from 'app/models/project';
import { Subdirection } from 'app/models/subdirection';
import { BudgetKeyService } from 'app/services';

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
  public behaviorSubject: BehaviorSubject<any[]>
  public actions$: Observable<any[]>
  public actionDescription: any = "";
  public budgetKey: any;
  @ViewChild('myTable') table: any;
 
  constructor(
    private budgetKeyService: BudgetKeyService, 
    private toastr: ToastrService,
    private projectService: ProjectService,
    private subdirectionService: SubdirectionService,
    private programService: ProgramService,
    private budgetKeyDetailsService: BudgetKeyDetailsService
  ) { }

  ngOnInit() {
    this.getSubdirections()
    this.getPrograms()
    this.behaviorSubject = new BehaviorSubject<any[]>( this.actions );
    this.actions$ = this.behaviorSubject.map( data => data.map( a => a ))   
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
    this.program = JSON.parse(JSON.stringify(program));    
    this.project = JSON.parse(JSON.stringify(project));  
    this.toggleExpandRow( program )    
  }

  onSubmitAddAction() {
    let val: any = { description: this.actionDescription }
    val.action_number = this.actions.length + 1
    this.actions.push(val)    
    this.behaviorSubject.next( this.actions )
    this.actionDescription = ''
  }

  onSubmitBudgetKey( values ) {
    values.programId = this.program.id;
    values.projectId = this.project.id;  
    this.budgetKey = `${this.project.project_number}.${this.program.program_number}.${values.piid_ojectives}`;
    values.budget_key_id = this.budgetKey;
    this.budgetKeyService.create( values )
      .subscribe( res => {
        if ( res ) {
          this.saveActions( res )
          this.clearData()      
        }
      },
      data => this.showError(data.error.message),
      () => console.log('Completed'))      
  }

  saveActions( budgetKeyResent ) {
    this.actions.forEach( action => action.budget_keyId = budgetKeyResent.id)
    this.budgetKeyDetailsService.create( this.actions )
      .subscribe( resp => {
        this.showSuccess()
        console.log('resp: ', resp) 
    })
      
  }

  clearData() {
    this.actions = [];
    this.behaviorSubject.next( this.actions )
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
