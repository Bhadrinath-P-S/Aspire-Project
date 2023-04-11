import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateAdminGuard } from './activate-admin.guard';
import { ActivateGuard } from './activate.guard';
import { AdminComponent } from './Admin/Admin.component';
import { BookSeatComponent } from './BookSeat/BookSeat.component';
import { BookTicketComponent } from './BookTicket/BookTicket.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { DeactivateGuard } from './deactivate.guard';
import { HomeComponent } from './Home/Home.component';
import { IndexComponent } from './Index/Index.component';
import { LoginComponent } from './Login/Login.component';
import { MovieDescriptionComponent } from './MovieDescription/MovieDescription.component';
import { PaymentComponent } from './Payment/Payment.component';
import { RegisterComponent } from './Register/Register.component';
import { TheatreLocationComponent } from './TheatreLocation/TheatreLocation.component';
import { TicketGenerateComponent } from './TicketGenerate/TicketGenerate.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Admin',
    component: AdminComponent,
    canActivate: [ActivateAdminGuard]
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Home/:check',
    component: MovieDescriptionComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
    // canDeactivate: [DeactivateGuard]
  },
  {
    path: 'BookTicket',
    component: BookTicketComponent
  },
  {
    path: 'Theatre',
    component: TheatreLocationComponent,
    canActivate: [ActivateGuard]
  },
  {
    path: 'BookSeat',
    component: BookSeatComponent
  },
  {
    path: 'Payment',
    component: PaymentComponent
  },
  {
    path: 'TicketGenerate',
    component: TicketGenerateComponent
  },
  {
    path: 'ContactUs',
    component: ContactUsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
