import { SubdirectionService } from './../../../../../services/subdirection.service';
import { Subdirection } from './../../../../../models/subdirection';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subdirections',
  templateUrl: './subdirections.component.html',
  styleUrls: ['./subdirections.component.scss']
})
export class SubdirectionsComponent implements OnInit {

  public subdirections: Subdirection[];

  public columns = [
    { prop: "id", name: "ID" },
    { prop: "name", name: "Nombre de departamento" },
    { prop: "boss_name", name: "Jefe de departamento" } 
  ];

  constructor( private subdirectionService: SubdirectionService ) { }

  ngOnInit() {
    this.getSubdirections();
  }

  getSubdirections(): void {
    this.subdirectionService.all()
      .subscribe( data => {
        this.subdirections = data;

        // this.columns = Object.keys(this.subdirections[0]).map( sub => {
        //   return { "prop": sub }
        // });
        // console.log('this.columns: ', this.columns);
        console.log('this.subdirections: ', this.subdirections);

      });
  }

}
