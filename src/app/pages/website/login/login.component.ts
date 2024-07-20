import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData: any = {};
  role: string = ''; // Manage role-based navigation

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Retrieve the role from the navigation state if available
    this.role = history.state.role || '';
  }

  onSubmit(): void {
    this.http.post('http://localhost:3000/api/login', this.loginData).subscribe(
      (res: any) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token); // Store JWT in local storage
          // Navigate based on the role
          if (this.role === 'vendor') {
            this.router.navigate(['/all-flights']); // Navigate to vendor-specific page
          } else if (this.role === 'user') {
            this.router.navigate(['/search']); // Navigate to user-specific page
          } else {
            // Fallback if no role is set
            this.router.navigate(['/']);
          }
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

  navigateAsVendor(): void {
    // Set role to vendor and navigate to login with role info
    this.router.navigate(['/vendor-login'], { state: { role: 'vendor' } });
  }

  navigateAsUser(): void {
    // Set role to user and navigate to login with role info
    this.router.navigate(['/login'], { state: { role: 'user' } });
  }
}
