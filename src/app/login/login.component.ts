
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService} from '../services/alert.service'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private authService: AuthService) {}
        
        // {
        //     if (this.authService.currentUser) { 
        //         this.router.navigate(['/']);
        //     }

        // }


    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

       
        // this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    get f() { return this.loginForm.controls; }


//   redirect(){
//       if (this.authService.currentUser) { 
//         this.router.navigate(['/about']);
//     }

//   }

    onSubmit() {
        this.submitted = true;


        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => { this.router.navigate(['/about'])
                    // this.redirect()
                    // this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
   
}





// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
// import { AuthService } from '../services/auth.service';
// import { AlertService } from '../services/alert.service';

// @Component({
//     selector: 'app-login',
//     templateUrl: 'login.component.html'})
// export class LoginComponent implements OnInit {
//     loginForm: FormGroup;
//     loading = false;
//     submitted = false;
//     returnUrl: string;

//     constructor(
//         private formBuilder: FormBuilder,
//         private route: ActivatedRoute,
//         private router: Router,
//         private authService: AuthService,
//         private alertService: AlertService) {}

//     ngOnInit() {
//         this.loginForm = this.formBuilder.group({
//             username: ['', Validators.required],
//             password: ['', Validators.required]
//         });

//         // reset login status
//         this.authService.logout();

//         // get return url from route parameters or default to '/'
//         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/about';
//     }

//     // convenience getter for easy access to form fields
//     get f() { return this.loginForm.controls; }

//     onSubmit() {
//         this.submitted = true;

//         // stop here if form is invalid
//         if (this.loginForm.invalid) {
//             return;
//         }

//         this.loading = true;
//         this.authService.login(this.f.username.value, this.f.password.value)
//             .pipe(first())
//             .subscribe(
//                 data => {
//                     this.router.navigate([this.returnUrl]);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                 });
//     }
// }



// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

// import { AuthService } from '../auth.service'

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//     loginForm: FormGroup;
//     loading = false;
//     submitted = false;
//     returnUrl: string;
//     error = '';

//     constructor(
//         private formBuilder: FormBuilder,
//         private route: ActivatedRoute,
//         private router: Router,
//         private authService: AuthService) {}


//     ngOnInit() {
//         this.loginForm = this.formBuilder.group({
//             email: ['', Validators.required],
//             password: ['', Validators.required]
//         });

       
//         this.authService.logout();
//         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/about';
//     }


//     get f() { return this.loginForm.controls; }
  

//     onSubmit() {
//         this.submitted = true;


//         if (this.loginForm.invalid) {
//             return;
//         }

//         this.loading = true;
//         this.authService.login(this.f.email.value, this.f.password.value)
//             .pipe(first())
//             .subscribe(
//                 data => {
//                     this.router.navigate([this.returnUrl]);
//                 },
//                 error => {
//                     this.error = error;
//                     this.loading = false;
//                 });
//     }
   
// }
