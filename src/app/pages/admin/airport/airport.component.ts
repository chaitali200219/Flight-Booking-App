import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})
export class AirportComponent implements OnInit {
  airportList:any[] =[];

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getAllAirport();
  }

  getAllAirport(){
    this.http.get('http://localhost:3000/api/airport')
.subscribe((res: any)=>{
      this.airportList=res.data;
      // this.vendorList.forEach(element =>{
      //   element.isEdit=false;
      // })
      
    });
   }
  bulkUpdateairport(){
    this.http.post('https://freeapi.gerasim.in/api/FlightBooking/AddUpdateBulkairport',this.airportList).subscribe((res:any)=>{
      if (res.result){
        alert("Bulk Update Success");
      }
      else{
        alert(res.message)
      }
  
    })
  
  }
  addNew(){
    const obj={
      cityId:0,
      cityName:''
    };
    this.airportList.unshift(obj)
  }
  
  }
  



