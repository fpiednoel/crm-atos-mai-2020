import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit,OnDestroy {

  public headers : string[];
  public states = Object.values(StateOrder);
  public btnRoute : Btn;
  public btnHref : Btn;
  public btnAction : Btn;
  public collection$ : Observable<Order[]>;

  constructor(private os : OrdersService) { }

  ngOnInit(): void {
    this.btnRoute = {
      label : 'Add an order',
      route : 'add'
    }
    this.btnHref = {
      label : 'Go to google',
      href : 'http://google.fr'
    }
    this.btnAction = {
      label : 'Click',
      action : true
    }

    /*this.os.collection.subscribe((datas) => {
      this.collection = datas;
    });*/

    this.collection$ = this.os.collection;

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

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  public changeState(item : Order, event){
    this.os.changeState(item,event.target.value).subscribe((res) => {
        //traiter reponse API
        item.state = res.state;
      });
  }

   public openPopUp(){
     alert('open pop up');
   }
}
