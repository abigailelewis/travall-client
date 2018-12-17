import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CrewService } from '../services/crew.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})

export class AddMemberComponent implements OnInit {
  addMemberForm: FormGroup;
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';

  constructor(private formBuilder: FormBuilder, private router: Router, private matDialogRef: MatDialogRef<AddMemberComponent>, public dialog: MatDialog, private crewService: CrewService) { }

  ngOnInit() {
    this.addMemberForm = this.formBuilder.group({
      "email": new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.addMemberForm.value)
    this.crewService.addMember(this.addMemberForm.value, this.currentTravall.id);
    this.matDialogRef.close();
    this.router.navigate(['/travall']);
  }


}