import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path : 'products',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule)
  },
  {
    path : 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule)
  },
  {
    path : '', redirectTo: 'auth', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
