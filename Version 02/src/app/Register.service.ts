import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  private login: any;

  public islogin() {
    if (this.login == null) {
      return false;
    }
    return true;
  }
  public load(data: any) {
    this.login = data;
  }

  public getname() {
    if (this.login == null) {
      return false;
    }
    return this.login;
  }


  constructor(private client: HttpClient) { }

  // For Post User-Registration

  registrationInfo(body: any) {
    return this.client.post("http://localhost:3000/registration", body);
  }


  // For Movie Description

  movieNowShowing() {
    return this.client.get("http://localhost:3000/movieNowShowing");
  }

  movieUpcoming() {
    return this.client.get("http://localhost:3000/movieUpcoming");
  }


  // For Ticket Generation

  theatre() {
    return this.client.get("http://localhost:3000/theatreSelection");
  }

  movie() {
    return this.client.get("http://localhost:3000/movieSelection");
  }

  seat() {
    return this.client.get("http://localhost:3000/seats");
  }

  payment() {
    return this.client.get("http://localhost:3000/payment");
  }
}

