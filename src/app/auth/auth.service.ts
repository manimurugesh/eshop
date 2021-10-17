import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from './../model/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userInfo: Array<User>;
  authStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.userInfo = [
      {
        name: 'Manikandan',
        username: 'manikandan@007',
        password: 'Password@123',
        email: 'manikandan007@gmail.com',
      },
    ];
  }

  register(user: User): void {
    this.userInfo.push(user);
    this.updateAuthStatus(true);
  }

  checkLogin(username: string, password: string): boolean {
    const userInfo = this.userInfo.find(
      (user) => user.username === username && user.password === password
    );
    if (userInfo) {
      this.updateAuthStatus(true);
      return true;
    }
    this.updateAuthStatus(false);
    return false;
  }

  updateAuthStatus(status: boolean): void {
    this.authStatus.next(status);
  }

  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }
}
