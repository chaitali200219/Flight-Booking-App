import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css'
})
export class NewFlightComponent implements OnInit {

  airportList: any[] = [];
  flightObj:any=
    {
      "flightId": 23,
      "flightNumber": "",
      "arrivalTime": "",
      "departureTime": "",
      "price": 0,
      "totalSeats": 0,
      "arrivalAirportName": "",
      "arrivalAirportCode": "TSA",
      "departureAirportName": "",
      "departureAirportCode": "IGA",
      "vendorName": "Emirates",
      "vendorLogoUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQspXdSGDcRVg7aGl73yVCUgANdLzq0aYI5fppZ5HFa7GK_wEe4",
      "travelDate": ""
    }
  

  constructor(private http: HttpClient, private router: Router) {
    const localData=localStorage.getItem("FlightUser");
    if(localData!=null){
      this.flightObj.flightVendorId=JSON.parse(localData).vendorId;
    }
  }

  ngOnInit(): void {
    this.loadAirports();
  }

  loadAirports() {
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
  onSaveFlight(){
    
    
    
    this.http.post('http://localhost:3000/api/flights',this.flightObj).subscribe((res:any)=>{
      console.log(res)
      if(res.result){
        alert('Flight Created Success');
        this.router.navigate(['/all-flights']);
      }
      else{
        alert(res.message)
      }

    })

  }

}



 

 
  
