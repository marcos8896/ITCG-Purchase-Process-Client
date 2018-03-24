import { DepartmentService } from 'app/services/department.service';
import { SubdirectionService } from 'app/services/subdirection.service';
import { VicePrincipalService } from 'app/services/vice-principal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vice-requisitions',
  templateUrl: './vice-requisitions.component.html',
  styleUrls: ['./vice-requisitions.component.scss']
})
export class ViceRequisitionsComponent implements OnInit {

  public requis: any[];

  constructor(
    private vicePrincipalService: VicePrincipalService,
    private subdirectionsService: SubdirectionService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.getSubdirection()
  }

  getSubdirection(){
    this.vicePrincipalService.findById(
      JSON.parse(localStorage.getItem("ITCG_userId")), { 
        include: ['subdirection'] 
      }).subscribe( res => {
        console.log("res:     ", res) 
        this.subdirectionsService.findById(res.subdirection.id, {
          include: ['department']
        }).subscribe( res2 =>{
          console.log('res2: ', res2);
          
        })
      })
  }

}
