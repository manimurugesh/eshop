import { Injectable } from '@angular/core';
import { Products } from '../model/Products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Array<Products>;

  constructor() {
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

  getProducts(): Array<Products> {
    return this.products;
  }

  getProductById(id: number): Products {
    return this.products.find((product) => product.id === id);
  }
}
