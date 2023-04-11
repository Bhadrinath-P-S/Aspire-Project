import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Register.service';

@Component({
  selector: 'app-Admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css']
})
export class AdminComponent implements OnInit {

  movieList1: any = "";
  movieList2: any = "";

  constructor(private service: RegisterService) { }

  ngOnInit() {
    this.service.movieNowShowing().subscribe(data => {
      this.movieList1 = data;
    });

    this.service.movieUpcoming().subscribe(data => {
      this.movieList2 = data;
    });
  }
}
