import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Subject } from 'rxjs';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-page-detail-order',
  templateUrl: './page-detail-order.component.html',
  styleUrls: ['./page-detail-order.component.scss']
})
export class PageDetailOrderComponent implements OnInit {

  public item$ : Subject<Order>;

  constructor(private os : OrdersService) {
    this.item$ = this.os.detailItem$;
  }

  ngOnInit(): void {
  }

}
