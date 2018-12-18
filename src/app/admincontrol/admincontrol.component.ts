import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service'
import { AdmincontrolService } from '../services/admincontrol.service'
import { AlertService } from '../services/alert.service';
import { User } from '../models/user';
import { Travall } from '../models/travall';
@Component({
  selector: 'app-admincontrol',
  templateUrl: './admincontrol.component.html',
  styleUrls: ['./admincontrol.component.scss']
})
export class AdmincontrolComponent implements OnInit {
  // sessionToken: string = localStorage.getItem('currentAdmin');
  user: any = [];
  users: User[];
  loading = false;
  error = '';
  travall: any = [];
  travalls: Travall[];


  constructor(private alertService: AlertService, private router: Router, private adminService: AdminService, private admincontrolService: AdmincontrolService, private route: ActivatedRoute, ) { }

  logout() {
    this.adminService.logout();
    this.router.navigate(['/admin']);
  }
  ngOnInit() {
    this.getAll();
    this.getAlltravall();
  }

  getAll() {
    this.user = [];
    this.admincontrolService.getAll(this.user.id)
      .subscribe((data: any) => {
        console.log(data);
        this.user = data;
      },
        error => {
          this.alertService.error(error);
          this.loading = false;

        });
  }

  getAlltravall() {
    this.travall = [];
    this.admincontrolService.getAlltravall(this.travall.id)
      .subscribe((data: any) => {
        console.log(data);
        this.travall = data;
      },
        error => {
          this.alertService.error(error);
          this.loading = false;

        });
  }
  // delete(id) {
  //     this.admincontrolService.deleteUser(id)
  //       .subscribe(res => {
  //         this.getAll();
  //       }, (err) => {
  //         console.log(err);
  //       }
  //       );
  //     }

  delete(user: User): void {
    // this.users = this.users.filter(u => u !== user);
    this.admincontrolService.deleteUser(user).subscribe(
      res => {
        this.getAll();
      }, (err) => {
        console.log(err);
      }
    );
  }

  deleteTravall(travall: Travall): void {

    this.admincontrolService.deleteTravall(travall).subscribe(
      res => {
        this.getAlltravall();
      }, (err) => {
        console.log(err);
      }
    );
  }
};