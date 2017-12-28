import { Component, OnInit } from '@angular/core';
import { SubdirectionService } from 'app/services/subdirection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { Subdirection } from 'app/models/subdirection';

@Component({
  selector: 'app-subdirection-edit',
  templateUrl: './subdirection-edit.component.html',
  styleUrls: ['./subdirection-edit.component.scss']
})
export class SubdirectionEditComponent implements OnInit {

  public id: any;
  public subdirection: Subdirection;

  constructor(
    private subdirectionService: SubdirectionService, private route: ActivatedRoute,
    private toastr: ToastrService, private router: Router
  ) { }

  ngOnInit() {
    this.getUrlId();
  }

  getUrlId() {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      if ( this.id ) {
        this.subdirectionService.findById( this.id )
          .subscribe( subdirection => 
            this.subdirection = subdirection,
          err => {
            this.showError('Ese registro no se encuentra en nuestra base de datos :(');
            setTimeout(() => this.router.navigateByUrl('/warehouse/subdirection/all'), 4000);
          })
      }
    })
  }

  onSubmitSubdirection() {
    this.subdirectionService.update( this.subdirection )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess();
          this.router.navigate(['/warehouse/subdirection/all']);
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
