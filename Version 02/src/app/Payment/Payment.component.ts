import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Payment',
  templateUrl: './Payment.component.html',
  styleUrls: ['./Payment.component.css'],
  styles: ['input.ng-invalid{border: 2px solid red;} input.ng-valid{border: 1px solid green;}']
})
export class PaymentComponent implements OnInit {

  public paymentForm !: FormGroup;
  constructor(private FormBuilder : FormBuilder, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.paymentForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      ccv: ['', [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]],
      cardnumber: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      month_and_year: ['', [Validators.required]]
  })
}


  payment() {
    this.http.post<any>("http://localhost:3000/payment", this.paymentForm.value)
      .subscribe(data => {
        alert("Payment Successful!");
        this.paymentForm.reset();
        // this.router.navigate(['/Login']);
      }, err => {
        alert("Payment Failure")
      })
  }

}
