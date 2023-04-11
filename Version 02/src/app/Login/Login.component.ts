import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../Register.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
  styles: ['input.ng-invalid{border: 3px solid red;} input.ng-valid{border: 3px solid green;}']
})
export class LoginComponent implements OnInit {

  retUrl:any = 'login';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private slogin: RegisterService) { }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$")]],
    password: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$")]]
  });

  ngOnInit() {
    this.route.queryParamMap.subscribe(parama => {
      this.retUrl = parama.get('retUrl');
      console.log("LoginComponent/ngOnInit", this.retUrl);
    })
  }

  login() {

    if (this.loginForm.value.email == "admin@gmail.com" && this.loginForm.value.password == "Admin@123") {
      alert("Admin Login Successfully!!");
      this.router.navigate(['/Admin']);
      this.slogin.load(true);
      localStorage.setItem("userdata", "true");
    }

    else {
      this.http.get<any>("http://localhost:3000/registration")
        .subscribe(data => {
          const user = data.find((result: any) => {
            if (result.email === this.loginForm.value.email) {
              console.log(JSON.stringify(result));
              return result;
            }
          });

          if (user == null) {
            alert("No user Found");
          } else if (user.password === this.loginForm.value.password) {
            alert("Login successful!!");
            localStorage.setItem('userdata', JSON.stringify(user));
            this.slogin.load(user);
            if (this.retUrl != null) {
              location.replace(this.retUrl);
            } else {
              this.router.navigate(['/']);
            }
          } else {
            alert("Invalid Email or Password!!")
          }
        });
    }
  }
}
