import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-vendor',
  templateUrl: './login-vendor.component.html',
  styleUrl: './login-vendor.component.css'
})
export class LoginVendorComponent {
  loginData: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    this.http.post('http://localhost:3000/api/vendorLogin', this.loginData).subscribe(
      (res: any) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token); // Store JWT in local storage
          this.router.navigate(['/all-flights']); // Redirect to all-flights page
        } else {
          alert('Login failed. No token found.');
        }
      },
      (error: any) => {
        if (error.status === 401) {
          alert('Invalid credentials. Please try again.');
        } else {
          alert('Login failed. Please try again.');
        }
      }
    );
  }

}

