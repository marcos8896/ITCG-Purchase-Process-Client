import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseOrderService } from '../../../../../services/purchase-order.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit {

  @ViewChild('myTable') table: any;

  public purchaseOrders: any[];
  public selectedFilter = 'provider_name';
  public temp: any = [];
  public filterBy = [
    { value: 'provider_name', name: 'Nombre de proveedor' },
    { value: 'id', name: 'ID Orden' },
    { value: 'providerId', name: 'ID Proveedor' },
    { value: 'date', name: 'Fecha' },
  ];

  // For debounce purpose
  private subject: BehaviorSubject<string>;
  public searchTextValue: string;

  constructor( private purchaseOrderService: PurchaseOrderService ) {
    this.subject  = new BehaviorSubject<string>(this.searchTextValue);
    
  }


  ngOnInit() {
    this.getPurchaseOrders();
    this.debounce();
  }


  debounce() {
    // Subscribe to observable for debounce
    this.subject.debounceTime(400).subscribe( searchTextValue => {
      if ( searchTextValue !== undefined ) {
        const val = searchTextValue.toLocaleLowerCase();
      
        // filter our data
        const temp = this.temp.filter( element => element[this.selectedFilter].toString().toLowerCase().indexOf(val) !== -1 || !val );
    
        // update the rows
        this.purchaseOrders = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }
    })
  }


  getPurchaseOrders() {

    this.purchaseOrderService.getAll({
      include: [
        {
          relation: 'provider',
          scope: {
            fields: ['name'],
          }
        }
      ]
    }).subscribe( purchaseOrders => {

      purchaseOrders.forEach( el => {

        el.provider_name = el.provider ? el.provider.name : "";
        el.date = new Date(el.date).toLocaleDateString();
        delete el.provider;

      });

      this.purchaseOrders = purchaseOrders;
      this.temp = [...this.purchaseOrders];

    });

  }

  onDetailToggle( event ) { }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  updateFilter() {
    this.subject.next(this.searchTextValue);
  }

}
