
import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  logout() {

    this.authService.logout();
    this.router.navigate(['/login']);
}

  ngOnInit() {
  }

}


// import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { ActivatedRoute, Router } from '@angular/router';
// import { User } from '../models/user';
// import { UserService } from '../services/user.service';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-nav',
//   templateUrl: './nav.component.html',
//   styleUrls: ['./nav.component.css']
// })
// export class NavComponent implements OnInit {
//   currentUser: User;
//     currentUserSubscription: Subscription;

//   constructor(private userService: UserService, private authService: AuthService,) {
//     this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
//         this.currentUser = user;
//     });
// }


//   ngOnInit() {
//   }

// }
