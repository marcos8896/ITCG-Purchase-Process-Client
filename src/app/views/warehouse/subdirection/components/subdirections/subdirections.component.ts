import { SubdirectionService } from './../../../../../services/subdirection.service';
import { Subdirection } from './../../../../../models/subdirection';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';

@Component({
  selector: 'app-subdirections',
  templateUrl: './subdirections.component.html',
  styleUrls: ['./subdirections.component.scss']
})
export class SubdirectionsComponent implements OnInit {

  @ViewChild('myTable') table: any;

  
  public subdirections: Subdirection[];

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
  
  onDetailToggle( event ) {
    console.log('event: ', event);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

}
