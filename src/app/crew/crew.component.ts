// import { Component, OnInit } from '@angular/core';
// import { CrewService } from '@/services/crew.service';

// @Component({
//   selector: 'app-crew',
//   templateUrl: './crew.component.html',
//   styleUrls: ['./crew.component.css']
// })
// export class CrewComponent implements OnInit {
//   members: any = [];
 
//   tempTravallId: number;

//   constructor(private crewService: CrewService) { }

//   ngOnInit() {
//     this.getCrew();
//   }
  
//   getCrew() {
//     this.members = [];
//     this.crewService.getCrew(this.tempTravallId).subscribe((data: {}) => {
//       console.log(data);
//       // this.members = data.users;
//     });
//   }

// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService} from '../services/user.service'
import { CrewService } from '../services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: 'crew.component.html',
  styleUrls: ['crew.component.css']})

export class CrewComponent implements OnInit {
   
    // currentUserSubscription: Subscription;
    // users: any;
    travallId: number;
    // userArray: Array<Object>;
    users: User[] = [];

    constructor(private crewService: CrewService, private userService: UserService) {
        // this.currentUserSubscription = this.crewService.currentUser.subscribe(user => {
        //     this.currentUser = user;
        // });
    }

    ngOnInit() {
      // this.loadAllUsers();
        this.getCrew(this.travallId);
    }
    // ngOnDestroy() {
    //     // unsubscribe to ensure no memory leaks
    //     this.currentUserSubscription.unsubscribe();
    // }

    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => { 
    //         this.loadAllUsers() 
    //     });
    // }

    getCrew(travallId: number) {


    //   this.crewService.getAll(travallId).subscribe((getAllUsersFromDb: Object[]) => {
    //     this.userArray = getAllUsersFromDb;
    //   })
    // }
//     private loadAllUsers() {
//       this.crewService.getAll().pipe(first()).subscribe(users => {
//           this.users = users;
//       });
//   }
// }
    //     this.crewService.getAll(travallId).pipe(first()).subscribe(users => { 
    //         this.users = users; 
    //     });
      }
  }

