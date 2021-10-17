import { Component, OnInit } from '@angular/core';

import { Cart } from '../model/Cart';
import { CartService } from '../shared/service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems: Array<Cart>;
cartCount: number;

  constructor(private cartService: CartService) {
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  addToCart(id: number): void {
    this.cartService.addToCart();
    this.cartService.addToCartItems(id);
    this.cartItems = this.cartItems.map((cartItem) => {
      let {count} = cartItem;
      const {id: productId} = cartItem;
      if (id === productId) {
        count++;
      }
      return {
        ...cartItem,
        count
      };
    });
  }

}
