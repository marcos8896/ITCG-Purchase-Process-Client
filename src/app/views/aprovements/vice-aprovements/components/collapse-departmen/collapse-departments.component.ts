import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-collapse-department',
    templateUrl: 'collapse-department.component.html'
})

export class CollapseDepartmentComponent implements OnInit {
    isCollapsed = true;
    
    constructor() { }

    ngOnInit() { }
    
    collapsed(event: any): void {
        // console.log(event);
    }

    expanded(event: any): void {
        // console.log(event);
    }
    
}
