import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface BookingDetails {
  name: string;
  contactNumber: string;
  aadharCardNumber: string;
  numberOfPeople: number;
}

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings: BookingDetails[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    this.http.get<BookingDetails[]>('http://localhost:3000/api/getBookings', { headers }).subscribe(
      (response) => {
        this.bookings = response;
        console.log('Bookings fetched:', this.bookings);
      },
      (error) => {
        console.error('Error fetching bookings:', error);
      }
    );
  }
  
}
