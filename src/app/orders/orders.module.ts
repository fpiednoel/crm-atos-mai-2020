import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormAddOrderComponent } from './component/form-add-order/form-add-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [PageListOrdersComponent, PageAddOrderComponent, FormAddOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
