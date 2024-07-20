import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface SearchParams {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  travelers: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchParams: SearchParams = {
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    travelers: ''
  };
  airportList: any[] = [];
  showFromList: boolean = false;
  showToList: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadAirports();
  }

  loadAirports(): void {
    this.http.get<any[]>('http://localhost:3000/api/airport').subscribe(
      (res: any) => {
        this.airportList = res.data;
      },
      (error) => {
        console.error('Error fetching airports:', error);
        alert('Failed to fetch airports. Please try again later.');
      }
    );
  }

  getAirportList(field: string): void {
    if (field === 'from') {
      this.showFromList = true;
    } else if (field === 'to') {
      this.showToList = true;
    }
  }

  selectAirport(field: string, airport: any): void {
    if (field === 'from') {
      this.searchParams.from = airport.name + ' (' + airport.code + ')';
      this.showFromList = false;
    } else if (field === 'to') {
      this.searchParams.to = airport.name + ' (' + airport.code + ')';
      this.showToList = false;
    }
  }

  searchFlights(): Observable<any> {
    let queryParams = new HttpParams();
    Object.keys(this.searchParams).forEach(key => {
      if (this.searchParams[key as keyof SearchParams]) {
        queryParams = queryParams.set(key, this.searchParams[key as keyof SearchParams]);
      }
    });
    return this.http.get('http://localhost:3000/api/search-flight', { params: queryParams });

  
  }
  searchFlight(): Observable<any> {
    // Construct the request body
    const body = { ...this.searchParams };

     return this.http.post('http://localhost:3000/api/search-flight',body);
    //   (res: any) => {
    //     console.log('Search results:', res);
    //     // Handle search results here
    //   },
    //   (error) => {
    //     console.error('Error searching flights:', error);
    //     alert('Failed to search flights. Please try again later.');
    //   }
    // );
  }

  onSearchClick(): void {
    
    this.searchFlight().subscribe(
      (res: any) => {
        console.log('Search results:', this.searchParams);
        // Handle search results here if needed
        this.router.navigate(['/different'] ,{ state: { searchParams: this.searchParams } });
      },
      (error: any) => {
        console.error('Error searching flights:', error);
        alert('Failed to search flights. Please try again later.');
      }
    );
  }
}
