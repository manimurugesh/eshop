import { Component, OnInit } from '@angular/core';

import { Products } from '../../model/Products';
import { ProductsService } from '../products.service';
import { CartService } from '../../shared/service/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Products>;

  constructor(
    private cartService: CartService,
    private productService: ProductsService
    ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(id: number): void {
    this.cartService.addToCart();
    this.cartService.addToCartItems(id);
  }

}
