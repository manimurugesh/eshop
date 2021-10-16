import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', component: ProductsComponent},
      { path: ':id', component: ProductDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule {}
