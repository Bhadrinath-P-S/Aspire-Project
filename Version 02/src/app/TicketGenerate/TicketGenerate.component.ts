import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../Register.service';

@Component({
  selector: 'app-TicketGenerate',
  templateUrl: './TicketGenerate.component.html',
  styleUrls: ['./TicketGenerate.component.css']
})

export class TicketGenerateComponent implements OnInit {

  theatre: any = "";
  movie: any = "";
  seat: any = "";
  payment: any = "";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/theatreSelection").subscribe(data => {
      this.theatre = data;
    });

    this.http.get("http://localhost:3000/movieSelection").subscribe(data => {
      this.movie = data;
    });

    this.http.get("http://localhost:3000/seats").subscribe(data => {
      this.seat = data;
    });

    this.http.get("http://localhost:3000/payment").subscribe(data => {
      this.payment = data;
    });

  }
}

