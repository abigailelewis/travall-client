import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

import { CrewService } from '../services/crew.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})

export class AddMemberComponent implements OnInit {
  addMemberForm: FormGroup;
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';
  loading: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private matDialogRef: MatDialogRef<AddMemberComponent>, public dialog: MatDialog, private crewService: CrewService) { }

  ngOnInit() {
    this.addMemberForm = this.formBuilder.group({
      "email": new FormControl(''),
    });
  }

  onSubmit() {
    this.crewService.addMember(this.addMemberForm.value, this.currentTravall.id);
    this.matDialogRef.close();
    this.router.navigate(['/travall']);
  }


}