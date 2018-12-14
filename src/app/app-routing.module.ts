// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TravallComponent} from './travall/travall.component';
import { AuthGuard } from './help/auth.guard';
import { CreateComponent } from './create/create.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    // { path: '', component: AboutComponent,  data: {title: 'About'}, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent, data: {title: 'About'}},
    { path: 'login', component: LoginComponent,  data: {title: 'Login'} },
    { path: 'signup', component: SignupComponent , data: {title: 'Siginup'} },
    { path: 'travall', component: TravallComponent , data: {title: 'Travall'},
        children: [{
        
            path:'create',
            component: CreateComponent
        },
        ]

},

    // otherwise redirect to about
    // { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })


export class AppRoutingModule { }