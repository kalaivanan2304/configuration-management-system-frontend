import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'password') {
      localStorage.setItem('token', 'dummy-jwt-token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid Credentials');
    }
  }
}
