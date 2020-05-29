import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NavLinks } from 'src/app/shared/interfaces/nav-links';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit,OnDestroy {

  public headers : string[];
  public states = Object.values(StateOrder);
  public btnRoute : Btn;
  public btnRouteDetail : Btn;
  public btnRouteComment : Btn;
  public btnHref : Btn;
  public btnAction : Btn;
  public collection$ : Subject<Order[]> = new Subject();
  public title : string;
  public subtitle : string;
  public navLinks : NavLinks[] ;

  constructor(private os : OrdersService,
    public route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {

this.navLinks = [] = [{'route' : 'detail', 'label' : 'Détail'},
{'route' : 'comment', 'label' : 'Comment'}];

    this.btnRoute = {
      label : 'Add an order',
      route : 'add'
    }

    this.btnRouteDetail = {
      label : 'Detail an order',
      route : 'detail'
    }

    this.btnRouteComment = {
      label : 'Comment an order',
      route : 'comment'
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

    this.os.collection.subscribe((col) => {
      this.collection$.next(col);
    });

    this.headers = [
      'Type',
      'Client',
      'Nb. Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
      'Action'
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

   public delete(item : Order){
     this.os.delete(item).subscribe((res) => {
      this.os.collection.subscribe((col) => {
        this.collection$.next(col);
      })
    })
  }

  public edit(item : Order){
    this.router.navigate(['orders/edit/'+item.id]);
  }
}
