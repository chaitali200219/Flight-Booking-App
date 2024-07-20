import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface FlightSearchParams {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
}

interface BookingDetails {
  name: string;
  contactNumber: string;
  aadharCardNumber: string;
  numberOfPeople: number;
}

@Component({
  selector: 'app-different-search',
  templateUrl: './different-search.component.html',
  styleUrls: ['./different-search.component.css']
})
export class DifferentSearchComponent implements OnInit {
  searchResults: any[] = [];
  searchParams: FlightSearchParams = {
    from: '',
    to: '',
    departDate: '',
    returnDate: ''
  };

  bookingDetails: BookingDetails = {
    name: '',
    contactNumber: '',
    aadharCardNumber: '',
    numberOfPeople: 0
  };

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const state = history.state;
    if (state) {
      this.searchParams = state.searchParams || {};
      this.searchFlights(); // Automatically trigger search if parameters are available
    }
  }

  searchFlights(): void {
    this.http.post<any>('/api/search', this.searchParams).subscribe(
      (response) => {
        this.searchResults = response.flights || [];
        console.log('Search results:', this.searchResults);
      },
      (error) => {
        console.error('Error searching flights:', error);
      }
    );
  }

  openBookingModal(): void {
    const modal = document.getElementById('bookingModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeBookingModal(): void {
    const modal = document.getElementById('bookingModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  saveBooking(): void {
    // Implement your booking logic here
    console.log('Booking flight:', this.searchParams.from, 'to', this.searchParams.to);
    console.log('Booking details:', this.bookingDetails);

    // Send booking details to backend API
    this.http.post('http://localhost:3000/api/saveBooking', this.bookingDetails).subscribe(
      (response) => {
        console.log('Booking saved:', response);
        // Optionally close modal after saving
        this.closeBookingModal();
        this.router.navigate(['/bookings']);
      },
      (error) => {
        console.error('Error saving booking:', error);
      }
    );
  }
}
