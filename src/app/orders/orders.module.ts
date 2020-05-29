import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormAddOrderComponent } from './component/form-add-order/form-add-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageDetailOrderComponent } from './pages/page-detail-order/page-detail-order.component';
import { PageCommentOrderComponent } from './pages/page-comment-order/page-comment-order.component';



@NgModule({
  declarations: [PageListOrdersComponent, PageAddOrderComponent, FormAddOrderComponent, PageEditOrderComponent, PageDetailOrderComponent, PageCommentOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
