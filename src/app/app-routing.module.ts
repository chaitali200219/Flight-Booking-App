import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';

import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { CityComponent } from './pages/admin/city/city.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';

import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { WebsiteLandingComponent } from './pages/website/website-landing/website-landing.component';

import { DifferentSearchComponent } from './pages/website/different-search/different-search.component';
import { RegisterComponent } from './pages/website/register/register.component';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './pages/website/login/login.component';
import { VendorRegisterComponent } from './pages/admin/vendor-register/vendor-register.component';
import { LoginVendorComponent } from './pages/admin/login-vendor/login-vendor.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'search',
    pathMatch:'full'
  },
  {
    path:'',
    component:WebsiteLandingComponent,
    children:[
      {
        path:'search',
        component:SearchComponent,
        canActivate: [AuthGuard],
        title:'Search Flight'
      },     
    
      {
        path:'bookings',
        component:MyBookingsComponent,
        canActivate: [AuthGuard],
        title:'My-Bookings' 
      },
      {
        path:'different',
        component:DifferentSearchComponent,
        title:'different-search'
      },
      {
        path:'register',
        component:RegisterComponent,
        title:'register'
      },
      {
        path: 'vendor-register',
        component: VendorRegisterComponent, // Vendor registration route
        title: 'Vendor Register'
      },
      {
        path: 'vendor-login',
        component: LoginVendorComponent,
        title: 'Vendor Login'
      },
     

      {
        path:'login',
        component:LoginComponent,
        title:'login'
      }
    ]


  },
  
  {
    path:'all-flights',
    component:AllFlightsComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'airport',
        component:AirportComponent
      },
      {
        path:'city',
        component:CityComponent
      },
      {
        path:'all-bookings',
        component:BookingsComponent
      },
      {
        path:'new-flight',
        component:NewFlightComponent
      },
      
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
