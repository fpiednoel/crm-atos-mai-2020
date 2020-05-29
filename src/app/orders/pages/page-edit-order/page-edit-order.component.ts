import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {

  public title : string;
  public subtitle : string;
  public id : string;
 // public item : Order;
  public item$ : Observable<Order>;

  constructor(private os : OrdersService,
    private router : Router,
    private route : ActivatedRoute) {
     }

  ngOnInit(): void {

    this.route.data.subscribe((datas) => {
      this.title = datas.title
      this.subtitle = datas.subtitle;
    });
   this.item$ =  this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.os.getItemById(params.get('id'))
      )
    );
  /*  this.id = this.route.snapshot.paramMap.get('id');
    this.os.getItemById(this.id).subscribe((res) => {
      this.item=res;
    });*/
  }

  public edit(item : Order){
    this.os.updateItem(item).subscribe((res) => {
      this.router.navigate(['orders']);
    })
  }

}
