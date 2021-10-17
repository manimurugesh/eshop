import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Cart } from '../../../model/Cart';
import { Products } from './../../../model/Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
cartItems: Array<Cart>;
products: Array<Products>;

constructor() {
  this.cartItems = [];
  this.products = [
    {
      id: 1,
      title: 'MacBook Air',
      description:
        'The minimalist collaboration features chairs, lightening, Shelves, Sofas, Desks and various home accessories, all offering form and function at the same point.We use high-strength clamps and joinery techniques specially designed for engineered wood beds. Ergo, no irksome creaks - and you can sleep like a baby, well into adulthood!',
      price: 60000,
    },
    {
      id: 2,
      title: 'iPhone 12',
      description:
        'A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
      price: 80000,
    },
  ];
}

addToCart(): void {
  const { value } = this.cartCount;
  this.cartCount.next(value + 1);
}

getCartCount(): Observable<number> {
  return this.cartCount.asObservable();
}

addToCartItems(id: number): void {
  const cartIndex = this.cartItems.findIndex((cartItem) => cartItem.id === id);
  if (cartIndex >= 0) {
    this.cartItems[cartIndex] = {
      ...this.cartItems[cartIndex],
      count: this.cartItems[cartIndex].count + 1
    };
  } else {
    this.cartItems.push({ id, count: 1 });
  }
}

getCartItems(): Array<Cart> {
  return this.cartItems.map((cartItem) => {
    const product = this.products.find((item) => item.id === cartItem.id);
    return {
      ...cartItem,
      product
    };
  });
}

}
