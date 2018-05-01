import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../../../../../services/purchase-order.service';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit {

  constructor(
    private purchaseOrderService: PurchaseOrderService,
  ) { }

  ngOnInit() {

    this.purchaseOrderService.getAll({
      include: [
        { relation: 'provider' },
        { relation: 'purchase_order_requisition' },
      ]
    }).subscribe( res => {
      console.log(res);
    })

  }

}
