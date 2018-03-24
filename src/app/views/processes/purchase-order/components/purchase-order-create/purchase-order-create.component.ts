import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order-create',
  templateUrl: './purchase-order-create.component.html',
  styleUrls: ['./purchase-order-create.component.scss']
})
export class PurchaseOrderCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selected = [];

  columns: any[] = [
    { prop: 'name'} , 
    { name: 'Company' }, 
    { name: 'Gender' }
  ];

  data = [
      {
      "name": "Ethel Price",
      "gender": "female",
      "company": "Johnson, Johnson and Partners, LLC CMP DDC",
      "age": 22
      },
      {
      "name": "Claudine Neal",
      "gender": "female",
      "company": "Sealoud",
      "age": 55
      },
      {
      "name": "Beryl Rice",
      "gender": "female",
      "company": "Velity",
      "age": 67
      },
      {
      "name": "Wilder Gonzales",
      "gender": "male",
      "company": "Geekko"
      },
    ]

    onSelect({ selected }) {
      console.log('Select Event', selected, this.selected);
    }

    


}
