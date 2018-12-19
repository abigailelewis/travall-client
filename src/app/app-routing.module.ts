import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TravallComponent} from './travall/travall.component';
import { AuthGuard } from './help/auth.guard';
import { AdminGuard } from './help/admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdmincontrolComponent} from './admincontrol/admincontrol.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full'},
    { path: '*', redirectTo: '/about'},
    { path: 'about', component: AboutComponent, data: {title: 'About'}},
    { path: 'login', component: LoginComponent,  data: {title: 'Login'} },
    { path: 'signup', component: SignupComponent , data: {title: 'Register'} },
    { path: 'admin', component: AdminComponent, data: {title: 'Admin'}},
    { path:'admincontrol', component: AdmincontrolComponent, data: {title: 'Admin Control'}, canActivate: [AdminGuard]},
    { path: 'travall', component: TravallComponent, data: {title: 'Travall'}, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })


export class AppRoutingModule { }
