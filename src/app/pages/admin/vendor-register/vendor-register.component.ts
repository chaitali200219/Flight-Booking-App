import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css'],
})
export class VendorRegisterComponent {
  vendorData: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    console.log('Submitting vendor registration form:', this.vendorData);
    this.http.post('http://localhost:3000/api/vendorRegister', this.vendorData).subscribe(
      (res: any) => {
        console.log('Vendor registration successful:', res);
        alert('Registration successful! Please log in.');
        this.router.navigate(['/login'], { state: { role: 'vendor' } }); // Navigate to login page with role info
      },
      (error: any) => {
        console.error('Vendor registration failed:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}
