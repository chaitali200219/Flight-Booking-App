import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData: any = {};
  role: string = ''; // Added to manage role-based navigation

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Role could be set based on previous navigation or selection
    this.role = history.state.role || '';
  }

  onSubmit(): void {
    this.http.post('http://localhost:3000/api/register', this.formData)
      .subscribe(
        (res: any) => {
          console.log('Registration successful:', res);
          alert('Registration successful! Please log in.');
          if (this.role === 'vendor') {
            this.router.navigate(['/login'], { state: { role: 'vendor' } });
          } else if (this.role === 'user') {
            this.router.navigate(['/login'], { state: { role: 'user' } });
          }
        },
        (error: any) => {
          console.error('Registration failed:', error);
          alert('Registration failed. Please try again later.');
        }
      );
  }
}
