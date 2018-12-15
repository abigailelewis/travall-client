import { Component, OnInit } from '@angular/core';
import { CrewService } from '@/services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  members: any = [];
  currentTravall: any = localStorage.getItem('currentTravall');

  constructor(private crewService: CrewService) { }

  ngOnInit() {
    this.getCrew();
  }
  
  getCrew() {
    this.members = [];
    this.crewService.getCrew(this.currentTravall.id).subscribe((data: {}) => {
      console.log(data);
      // this.members = data.users;
    });
  }

}
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { first } from 'rxjs/operators';
// import { Subscription } from 'rxjs';
// import { ActivatedRoute, Router } from '@angular/router';
// import { User } from '../models/user';
// import { UserService } from '../services/user.service';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-about',
//   templateUrl: 'about.component.html',
//   styleUrls: ['about.component.css']})

// export class AboutComponent implements OnInit {
//     currentUser: User;
//     currentUserSubscription: Subscription;
//     users: User[] = [];

//     constructor(private userService: UserService, private authService: AuthService,) {
//         this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
//             this.currentUser = user;
//         });
//     }

//     ngOnInit() {
//         // this.loadAllUsers();
//     }
// //     ngOnDestroy() {
// //         // unsubscribe to ensure no memory leaks
// //         this.currentUserSubscription.unsubscribe();
// //     }

// //     deleteUser(id: number) {
// //         this.userService.delete(id).pipe(first()).subscribe(() => { 
// //             this.loadAllUsers() 
// //         });
// //     }

// //     private loadAllUsers() {
// //         this.userService.getAll().pipe(first()).subscribe(users => { 
// //             this.users = users; 
// //         });
// //     }
//  }
