import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collection : Order[];
  public headers : string[];
  public states = Object.values(StateOrder);

  constructor(private os : OrdersService) { }

  ngOnInit(): void {
    this.os.collection.subscribe((datas) => {
      this.collection = datas;
    });
    this.headers = [
      'Type',
      'Client',
      'Nb. Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }
  public changeState(item : Order, event){
    this.os.changeState(item,event.target.value).subscribe((res) => {
        //traiter reponse API
        item.state = res.state;
      });
  }
}
