import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RadioRoleInterface } from './../../models/radio-role.interface';
import { roles } from './_roles';
@Component({
    selector: 'app-role-radio',
    templateUrl: 'role-radio.component.html'
})

export class RoleRadioComponent {
    public roles: RadioRoleInterface[]
    public selectedRole: RadioRoleInterface

    constructor() {
        this.roles = roles
        this.selectedRole = roles[0]
     }

    onChangeRadioGroup( role: RadioRoleInterface ) {
        this.selectedRole = role
    }
}
