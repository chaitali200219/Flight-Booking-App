import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrl: './all-flights.component.css'
})
export class AllFlightsComponent implements OnInit {
  flightList: any[] = [];
  // private apiUrl = 'http://localhost:3000/api/delete';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllFlights();
  }

  getAllFlights() {
    this.http.get('http://localhost:3000/api/allflights')
      .subscribe((res: any) => {
        this.flightList = res.data;
      }, error => {
        console.error('Error fetching flights:', error);
        alert('Failed to fetch flights. Please try again later.');
      });
  }

  bulkUpdateflights(){
    this.http.post('http://localhost:3000/api/allflights',this.flightList).subscribe((res:any)=>{
      if (res.result){
        alert("Bulk Update Success");
      }
      else{
        alert(res.message)
      }
  
    })
  
  }
  deleteFlight(flightNumber: string) {
    console.log(flightNumber);
    const url = `http://localhost:3000/api/flights`;
    this.http.delete(`${url}/${flightNumber}`).subscribe(
      response => {
        console.log('Flight deleted successfully', response);
        // Handle successful response
      },
      error => {
        console.error('Error deleting flight', error);
        // Handle error response
      }
    );
  }
  
  
  // deleteFlight(flightNumber: string) {
  //   // Send flightNumber in the request body
  //   this.http.post(this.apiUrl, { flightNumber }).subscribe(
  //     () => {
  //       console.log('Flight deleted successfully');
  //       // Optionally, refresh your flight list or perform any other action on success
  //     },
  //     error => {
  //       console.error('Error deleting flight:', error);
  //       // Handle error response
  //     }
  //   );
  // };
  }




  

  
  // deleteFlight(flightNumber: string) {
  //   console.log(flightNumber)
  //   const url = `http://localhost:3000/api/flights/${flightNumber}`;
  //   this.http.delete(url);
  // }
  
