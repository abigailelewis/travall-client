import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CrewService } from '../services/crew.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})

export class AddMemberComponent implements OnInit {
  addMemberForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private matDialogRef: MatDialogRef<AddMemberComponent>, public dialog: MatDialog, private crewService: CrewService) { }

  ngOnInit() {
    this.addMemberForm = this.formBuilder.group({
      email: new FormControl(),
    });
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(AddMemberComponent);
  // }

  onSubmit() {
    return this.matDialogRef.close();
    this.crewService
  }


}

// @Component({
//   selector: 'add-member-dialog',
//   templateUrl: 'add-member-dialog.html',
// })
// export class AddMemberComponentDialog {}
