import { ToastrService } from 'ngx-toastr';
import { environment } from './../../../../../../environments/environment';
import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { PlanningService } from 'app/services/planning.service';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-user-table',
    templateUrl: 'user-table.component.html'
})

export class UserTableComponent {
    public BOSS_DEPARTMENT = environment.users.bossdepartment;
    public VICE_PRINCIPAL = environment.users.viceprincipal;

    @Input() rows: any[];
    @Output() userUpdate = new EventEmitter();
    @ViewChild('userTable') table: any;
    
    constructor( 
        private planningService: PlanningService,
        private toastrService: ToastrService
    ) { }
    
    setPermissions( hasPermissions, user ) {
        // revoke permissions
        if ( hasPermissions ) {
            if ( user.type === this.BOSS_DEPARTMENT ) {
                this.planningService.removeBoss( user.id )
                    .subscribe(
                        res => this.handleRemoveSucceed(res, user),
                        error => this.handleError())
            } else if ( user.type === this.VICE_PRINCIPAL ) {
                this.planningService.removeVicePrincipal( user.id )
                    .subscribe(
                        res => this.handleRemoveSucceed(res, user),
                        error => this.handleError())
            }
        } else { // grant permissions
            if ( user.type === this.BOSS_DEPARTMENT ) {
                this.planningService.addBoss( user.id )
                    .subscribe(
                        res => this.handleAddSucceed(res, user),
                        error => this.handleError())
            } else if ( user.type === this.VICE_PRINCIPAL ) {
                this.planningService.addVicePrincipal( user.id )
                    .subscribe(
                        res => this.handleAddSucceed(res, user),
                        error => this.handleError())
            }
        }
    }

    handleAddSucceed(res, user) {
        this.toastrService.success('Permisos concedidos. Ahora este usuario podrá acceder a la plataforma', 'Concedido');
        this.userUpdate.emit(user);
    }

    handleRemoveSucceed(res, user) {
        this.toastrService.success('Permisos denegados. Ahora este usuario dejará de poder acceder a la plataforma', 'Denegado');
        this.userUpdate.emit(user);
    }

    handleError() {
        this.toastrService.error('Ha ocurrido un error, intentelo de nuevo por favor', 'Error');
    }
}
