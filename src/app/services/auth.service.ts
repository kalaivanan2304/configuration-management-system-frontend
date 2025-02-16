
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('token', 'dummy-jwt-token');
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
