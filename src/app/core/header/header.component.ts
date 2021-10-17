import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './../../auth/auth.service';
import { CartService } from './../../shared/service/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  authStatus: boolean;
  cartCount: number;
  subscription: Subscription;

  constructor(
    private cartService: CartService,
    private authService: AuthService
    ) {
    this.cartCount = 0;
  }

  ngOnInit(): void {
    this.subscription = this.cartService.getCartCount().subscribe((count) => {
      this.cartCount = count;
    });
    this.subscription.add(
      this.authService.getAuthStatus().subscribe((status) => {
        this.authStatus = status;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
