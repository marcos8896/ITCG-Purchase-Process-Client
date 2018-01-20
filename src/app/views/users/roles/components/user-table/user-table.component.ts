import { BossDepartmentService } from 'app/services/boss-department.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'app-user-table',
    templateUrl: 'user-table.component.html'
})

export class UserTableComponent {
    @Input() rows: any[];
    @ViewChild('userTable') table: any;
    
    constructor( ) { }

}
