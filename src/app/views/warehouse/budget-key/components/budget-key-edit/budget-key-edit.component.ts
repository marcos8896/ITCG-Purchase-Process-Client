import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BudgetKeyService, BudgetKeyDetailsService, ProgramService, ProjectService, SubdirectionService } from 'app/services';
import { ToastrService } from 'ngx-toastr';
import { ProjectInterface } from 'app/models/project';
import { ProgramInterface } from 'app/models/program';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BudgetKeyInterface } from './../../../../../models/budget-key';
import { BudgetKeyDetailInterface } from '../../../../../models/budget-key-detail';
@Component({
  selector: 'app-budget-key-edit',
  templateUrl: './budget-key-edit.component.html',
  styleUrls: ['./budget-key-edit.component.scss']
})
export class BudgetKeyEditComponent implements OnInit {
  public behaviorSubject: BehaviorSubject<any[]>;
  public id: any;
  public budgetK: BudgetKeyInterface;
  public programs: ProgramInterface [];
  public program: ProgramInterface;
  public project: ProjectInterface;
  //Array Projects
  public projects = [];
  //Array Subdirections
  public subdirections = [];
  //Array actions
  public actions = [];
  public click: boolean = false
  public ban: boolean = false
  public actionDescription: any = "";
  public actions$: Observable<any[]>
  @ViewChild('myTable') table: any;

  constructor( 
    private budgerKeyService: BudgetKeyService,
    private budgetKeyDetailsService: BudgetKeyDetailsService,
    private programService: ProgramService,
    private projectService: ProjectService,
    private subdirectionService: SubdirectionService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUrlId();
    this.getProjects();
    this.getSubdirections();
    this.getPrograms();
  }

  onDetailToggle( event ) {
    console.log('event: ', event);
  }

  loadActions(){
    if(this.budgetK.budget_key_details){
      this.budgetK.budget_key_details.forEach(element => {
        this.actions.push(element )
      });
      
      this.behaviorSubject = new BehaviorSubject<any[]>( this.actions );
      console.log(this.actions)
      this.actions$ = this.behaviorSubject.map( data => data.map( a => a ))
    } else
      console.log("")
  }
  getPrograms(): void {
    this.programService.getAll({ include: ['project'] })
    .subscribe( data => this.programs = data )
  }
  getProjects() {
    this.projectService.getAll()
    .subscribe( project => this.projects = project)
  }

  projectSelected( project, program ) {
    this.program = JSON.parse(JSON.stringify(program));    
    this.project = JSON.parse(JSON.stringify(project));  
    this.toggleExpandRow( program )  
    this.click = true
    console.log(this.click)  
  }

  getSubdirections() {
    this.subdirectionService.getAll()
      .subscribe(subdirection => this.subdirections = subdirection)
  }
  onSubmitBudgetKey( values ) {
    delete values.description;
    values.programId = this.program.id;
    values.projectId = this.project.id;
    this.budgetK.piid_ojectives = `${this.project.project_number}.${this.program.program_number}.${values.piid_ojectives}`;
    values.budget_key_id = this.budgetK.piid_ojectives;
    values.id = this.budgetK.id;
    this.budgerKeyService.update( values )
    .subscribe( res => {
      if( res ) {
        this.showSuccess()
        this.saveActions( res )
        this.router.navigate(['/warehouse/budget-key/all']);
      }
    },
    data => this.showError(data.error.message),
    () => console.log('Completed'))
  }

  hidenInput(){
    if (this.click === true)
      this.ban = true
  }

  clearData() {
    this.actions = [];
    this.behaviorSubject.next( this.actions )
  } 
  
  getUrlId() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if( this.id ) {
        this.budgerKeyService.findById( this.id, { include: ['program', 'budget_key_details', 'project']} )
        .subscribe( budgetK =>{ 
          this.budgetK = budgetK
          console.log(this.budgetK)
          this.loadActions()
        })        
      }
    })
  }
  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }
  showSuccess() {
    this.toastr.success('Registro editado exitosamente', '¡Registro editado!')
  }
  
  close( val ) {
    this.actions = this.actions.filter( action => action.action_number !== val )
    this.actions.forEach( (action, i) => action.action_number = i + 1 )    
    this.behaviorSubject.next( this.actions )
  }

  showError( error ) {
    this.toastr.error(error, '¡Ha numa!')
  } 

  onSubmitAddAction() {
    let val: any = { description: this.actionDescription }
    val.action_number = this.actions.length + 1
    this.actions.push(val)    
    this.behaviorSubject.next( this.actions )
    this.actionDescription = ''
  }

  saveActions( budgetKeyResent ) {
    console.log(this.id)
    this.actions.forEach( action => action.budget_keyId = budgetKeyResent.id)
    console.log(this.actions)
    this.budgetKeyDetailsService.updateDetails( this.actions )
      .subscribe( resp => {
        console.log('resp: ', resp) 
    })
  }
}
