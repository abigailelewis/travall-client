import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TravallService } from '../services/travall.service';

@Component({
  selector: 'app-createtravall',
  templateUrl: './createtravall.component.html',
  styleUrls: ['./createtravall.component.css']
})
export class CreatetravallComponent implements OnInit {
  createTravallForm: FormGroup;
  user: any;

  constructor(private formBuilder: FormBuilder, private travallService: TravallService) { }

  ngOnInit() {
    this.user = localStorage.getItem('currentUser');
    this.createTravallForm = this.formBuilder.group({
      title: new FormControl(),
      location: new FormControl(),
      type: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      user: this.user,
    });
  }

  onSubmit() {
    console.log(this.createTravallForm.value);
    this.travallService.createTravall(this.createTravallForm.value)
    .subscribe(createdTravall => {
      console.log('submitted:', createdTravall);
      alert('hello');
    })
  }

}
