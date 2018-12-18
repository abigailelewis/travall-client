import { Component, OnInit } from '@angular/core';
import { CrewService } from '@/services/crew.service';
import { AddMemberComponent } from '../add-member/add-member.component';
import { MatDialog } from '@angular/material';
import {MatCardModule, MatCard, MatCardTitle} from '@angular/material/card';
import { User } from '../models/user';
import { Travall } from '../models/travall'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  currentTravall: any = JSON.parse(sessionStorage.getItem('currentTravall')) || '';
  members: any = [];


  constructor(private crewService: CrewService, private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.getCrew();
  }

  getCrew() {
    this.members = [];
    if (this.currentTravall != '') {
      this.crewService.getCrew(this.currentTravall.travall.id)
        .subscribe((data: any) => {
          this.members = data.members.users;
        });
    } else {
      return
    }
  }
 

  openDialog() {
    this.dialog.open(AddMemberComponent);
  }


  // delete(userid: User): void {
  //   // this.users = this.users.filter(u => u !== user);
  //   this.crewService.deleteMember(userid).subscribe(
  //     res => {
  //               this.getCrew();
  //             }, (err) => {
  //               console.log(err);
  //             }
  //   );
  // }
  deleteMember(userid: User) {
    this.crewService.deleteMember(userid)
      .subscribe(res => {
        this.getCrew();
      }, (err) => {
        console.log(err);
      }
      );
  }
}


