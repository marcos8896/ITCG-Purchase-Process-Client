import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-collapse-department',
    templateUrl: 'collapse-department.component.html'
})

export class CollapseDepartmentComponent implements OnInit {
    @Input() department: string;
    
    isCollapsed = true;
    
    constructor() { }

    ngOnInit() {
        // console.log(this.department);
     }
    
    collapsed(event: any): void {
        // console.log(event);
    }

    expanded(event: any): void {
        // console.log(event);
    }
    
}
