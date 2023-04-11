import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Seat {
  id: number;
  row: number;
  column: number;
  price: number;
  status: "available" | "selected" | "reserved";
}

@Component({
  selector: 'app-BookSeat',
  templateUrl: './BookSeat.component.html',
  styleUrls: ['./BookSeat.component.css']
})
export class BookSeatComponent implements OnInit {

  seats: Seat[] = [];

  constructor(private router: Router, private http: HttpClient) {
    const storedSeats = localStorage.getItem('seats');
    if (storedSeats) {
      this.seats = JSON.parse(storedSeats);
    } else {
      let id = 1;
      for (let row = 0; row <= 6; row++) {
        for (let col = 1; col <= 9; col++) {
          const seat: Seat = {
            id,
            row,
            column: col,
            price: 150,
            status: 'available'
          };
          this.seats.push(seat);
          id++;
        }
      }
    }
  }

  ngOnInit(){ }

  onSeatClick(seat: Seat) {
    if (seat.status === 'available') {
      seat.status = 'selected';
    } else if (seat.status === 'selected') {
      seat.status = 'available';
    } else if (seat.status === 'reserved') {
      alert('This seat is already reserved.');
    }

    localStorage.setItem('seats', JSON.stringify(this.seats));
  }

  onSubmit() {
    const selectedSeats = this.seats.filter((seat) => seat.status === 'selected');

    if (selectedSeats.length > 0) {
      selectedSeats.forEach((seat) => {
        seat.status = 'reserved';
      });

      const totalPrice = selectedSeats.length * 150;

      // create an array of seat objects with row and column information for each selected seat

      const seatData = selectedSeats.map((seat) => {
        return { row: seat.row, column: seat.column };
      });

      // create a new object to represent the booking with the total price, the number of seats booked, and the seat data

      const booking = {
        seats: selectedSeats.length,
        totalPrice: totalPrice,
        seatData: seatData
      };

      // insert the booking data into the database

      this.http.post('http://localhost:3000/seats', booking).subscribe(() => {
        alert('Seats booked successfully!');
        localStorage.setItem('seats', JSON.stringify(this.seats));
        // this.router.navigate(['/Payment']);

      }, err => {
        alert('An error occurred while booking the seats.');
      });
    } else {
      alert('Please select at least one seat.');
    }
  }

  onpayment() {
    this.router.navigate(['/Payment']);
  }
}
