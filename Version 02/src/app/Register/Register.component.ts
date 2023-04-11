import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm.validator';
import { RegisterService } from '../Register.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
  styles: ['input.ng-invalid{border: 3px solid red;} input.ng-valid{border: 3px solid green;}']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern("([a-zA-Z ]{4,20})")]],
      email: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
      phone: ['', [Validators.required, Validators.pattern("([6-9])([0-9]{9,9})")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$")]],
      cpassword: ['', [Validators.required]]
    }, { validator: ConfirmedValidator('password', 'cpassword') })


    // canExit(): boolean {

    //   console.log("Can Exit Register")
    //   if (confirm("You are about to leave registration page.. \nPress OK to continue.")) {
    //     return true;
    //   }
    //   else {
    //     return false;
    //   }
  }

  signUp() {
    this.http.get<any>('http://localhost:3000/registration').subscribe(res => {
      const user = res.find((result: any) => {
        return result.email === this.registerForm.value.email;
      });

      if (user) {
        alert("Email Already Exists");
      }

      else {
        this.http.post<any>("http://localhost:3000/registration", this.registerForm.value)
          .subscribe((data) => {
            alert("Registration Successful!");
            this.router.navigate(['/Login']);
          });
        }
     });
  }
}
