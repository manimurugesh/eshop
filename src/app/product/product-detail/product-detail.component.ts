import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Products } from '../../model/Products';
import { ProductsService } from '../products.service';
import { CartService } from './../../shared/service/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: Products;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    const { snapshot: { params: { id } } } = this.activatedRoute;
    this.productDetail = this.productService.getProductById(+id);
  }

  addToCart(): void {
    this.cartService.addToCart();
    this.cartService.addToCartItems(this.productDetail.id);
  }

}
