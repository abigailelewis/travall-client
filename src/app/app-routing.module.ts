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
import { SplashComponent } from './splash/splash.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    // { path: '', component: AboutComponent,  data: {title: 'About'}, canActivate: [AuthGuard] },

    { path: 'about', component: AboutComponent, data: {title: 'About'}},
    { path: 'login', component: LoginComponent,  data: {title: 'Login'} },
    { path: 'signup', component: SignupComponent , data: {title: 'Siginup'} },
    { path: 'admin', component: AdminComponent, data: {title: 'Admin'}},
    { path: 'splash', component: SplashComponent, data:{title: 'Splash'},canActivate: [AuthGuard]},
    { path:'admincontrol', component: AdmincontrolComponent, data: {title: 'Admincontrol'}, canActivate: [AdminGuard]},
    { path: 'travall', component: TravallComponent, data: {title: 'Travall'}, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })


export class AppRoutingModule { }
