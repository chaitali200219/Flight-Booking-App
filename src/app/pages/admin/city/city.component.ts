import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  cityList:any[] = [];
  
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getAllCity();
    
  }

  getAllCity(){
    this.http.get('http://localhost:3000/api/cities')
.subscribe((res: any)=>{
      this.cityList=res.data;
      this.cityList.forEach(element =>{
        element.isEdit=false;
      })
      
    });
   }

   bulkUpdateCity(){
    this.http.post('https://freeapi.gerasim.in/api/FlightBooking/AddUpdateBulkCity',this.cityList).subscribe((res:any)=>{
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
  this.cityList.unshift(obj)
}

}
