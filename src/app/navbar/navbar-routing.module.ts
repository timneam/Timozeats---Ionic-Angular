import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';
import { CartPage } from '../cart/cart.page';
import { OrdersPage } from '../orders/orders.page';
import { TrackersPage } from '../trackers/trackers.page';
import { NavbarPage } from './navbar.page';

const routes: Routes = [
  {
    path: 'Home',
    component: HomePage
  },
  {
    path: 'Cart',
    component: CartPage
  },
  {
    path: 'Orders',
    component: OrdersPage
  },
  {
    path: 'Trackers',
    component: TrackersPage
  },
  {
    path: 'Navbar',
    component: NavbarPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarPageRoutingModule {}
