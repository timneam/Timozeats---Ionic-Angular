import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'navbar',
    loadChildren: () => import('./navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'trackers',
    loadChildren: () => import('./trackers/trackers.module').then( m => m.TrackersPageModule)
  },
  {
    path: 'login-and-register',
    loadChildren: () => import('./login-and-register/login-and-register.module').then( m => m.LoginAndRegisterPageModule)
  },
  {
    path: 'menu-for-admin',
    loadChildren: () => import('./menu-for-admin/menu-for-admin.module').then( m => m.MenuForAdminPageModule)
  },
  {
    path: 'food-info/:id',
    loadChildren: () => import('./food-info/food-info.module').then( m => m.FoodInfoPageModule)
  },
  {
    path: 'order-info/:id',
    loadChildren: () => import('./order-info/order-info.module').then( m => m.OrderInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
