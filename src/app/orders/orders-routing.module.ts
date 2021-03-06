import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageDetailOrderComponent } from './pages/page-detail-order/page-detail-order.component';
import { PageCommentOrderComponent } from './pages/page-comment-order/page-comment-order.component';

const routes: Routes = [
  { path: '',
    component: PageListOrdersComponent ,
    data: {title: 'Orders', subtitle: 'List all order'},
    children : [
      {
        path: 'detail',
        component: PageDetailOrderComponent,
        data: {title: 'Orders', subtitle: 'Detail an order'}
      },
      {
        path: 'comment',
        component: PageCommentOrderComponent,
        data: {title: 'Orders', subtitle: 'Comment an order'}
      },
    ]
  },
  {
    path: 'add',
    component: PageAddOrderComponent,
    data: {title: 'Orders', subtitle: 'Add an order'}
  },
  {
    path: 'edit/:id',
    component: PageEditOrderComponent,
    data: {title: 'Orders', subtitle: 'Edit an order'}
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
