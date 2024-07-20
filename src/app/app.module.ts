import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { CityComponent } from './pages/admin/city/city.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/website/login/login.component';

import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { SearchComponent } from './pages/website/search/search.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { WebsiteLandingComponent } from './pages/website/website-landing/website-landing.component';

import { DifferentSearchComponent } from './pages/website/different-search/different-search.component';
import { RegisterComponent } from './pages/website/register/register.component';
import { VendorRegisterComponent } from './pages/admin/vendor-register/vendor-register.component';
import { LoginVendorComponent } from './pages/admin/login-vendor/login-vendor.component';





@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    AllFlightsComponent,
    BookingsComponent,
    CityComponent,
    LayoutComponent,
    LoginComponent,
    
    NewFlightComponent,
    SearchComponent,
    
    MyBookingsComponent,
    WebsiteLandingComponent,
   DifferentSearchComponent,
    RegisterComponent,
    VendorRegisterComponent,
    LoginVendorComponent

      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
