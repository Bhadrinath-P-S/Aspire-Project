import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { HomeComponent } from './Home/Home.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './Index/Index.component';
import { BookTicketComponent } from './BookTicket/BookTicket.component';
import { TheatreLocationComponent } from './TheatreLocation/TheatreLocation.component';
import { BookSeatComponent } from './BookSeat/BookSeat.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { PaymentComponent } from './Payment/Payment.component';
import { MovieDescriptionComponent } from './MovieDescription/MovieDescription.component';
import { AdminComponent } from './Admin/Admin.component';
import { TicketGenerateComponent } from './TicketGenerate/TicketGenerate.component';
import { AddMovieComponent } from './AddMovie/AddMovie.component';

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    IndexComponent,
    BookTicketComponent,
    TheatreLocationComponent,
    BookSeatComponent,
    ContactUsComponent,
    PaymentComponent,
    MovieDescriptionComponent,
    AdminComponent,
    TicketGenerateComponent,
      AddMovieComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
