import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-BookTicket',
  templateUrl: './BookTicket.component.html',
  styleUrls: ['./BookTicket.component.css']
})
export class BookTicketComponent implements OnInit {

  public bookTicket !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.bookTicket = this.formBuilder.group({
      movie_selection: ['', [Validators.required]],
      date: ['', [Validators.required]],
      slot: ['', [Validators.required]]
    })
  }

  ticket() {
    this.http.post<any>("http://localhost:3000/movieSelection", this.bookTicket.value)
      .subscribe((data) => {
        // alert("Movie Selection Successful!");
        this.bookTicket.reset();
        this.router.navigate(['/BookSeat']);
      }, err => {
        alert("Registration Failure")
      })
  }
}
