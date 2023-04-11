import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-TheatreLocation',
  templateUrl: './TheatreLocation.component.html',
  styleUrls: ['./TheatreLocation.component.css']
})
export class TheatreLocationComponent implements OnInit {

  theatreForm: FormGroup;
  selectedState: string = '';
  selectedCity: string = '';

  states: any[] = [
    {
      name: 'Tamil Nadu',
      cities: [
        { name: 'Salem', theatres: ["Inox Cinemas Salem", "Aascars Multiplex", "ARRS Multiplex Theatre", "Kailash Prakash Theatre", "K.S Theatre"] },
        { name: 'Chennai', theatres: ["Jazz Cinemas LUXE", "Mayajaal Multiplex", "PVR Cinemas Skywalk, Chennai", "Sathyam Cinemas", "Sangam Cinemas"] }
      ]
    }
  ];

  cities: any[] = [];

  theatres: any[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) {
    this.theatreForm = this.formBuilder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      theatre: ['', Validators.required]
    });
  }

  onSubmit() {
    this.http.post('http://localhost:3000/theatreSelection', this.theatreForm.value).subscribe(() => {
      this.router.navigate(['/BookTicket']);
    });
  }

  ngOnInit(): void { }

  stateChanged(event: any) {
    this.selectedState = event.target.value;
    this.cities = this.states.find(c => c.name === this.selectedState).cities;
  }

  cityChanged(event: any) {
    this.selectedCity = event.target.value;
    const selectedState = this.states.find(c => c.name === this.selectedState);
    this.theatres = selectedState.cities.find((s: { name: string, theatres: string[] }) => s.name === this.selectedCity)?.theatres || [];
  }

}
