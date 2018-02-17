import { CommonModule } from '@angular/common';
import { RoleRadioComponent } from './components/role-radio/role-radio.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        RoleRadioComponent
    ],
    declarations: [
        RoleRadioComponent
    ],
})
export class SessionSharedModule { }
