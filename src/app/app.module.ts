import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrewComponent } from './crew/crew.component';
import { NavComponent } from './nav/nav.component';
import { TransportationComponent } from './transportation/transportation.component';
import { ActivityComponent } from './activity/activity.component';
import { HeaderComponent } from './header/header.component';
import { TravallComponent } from './travall/travall.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './help/auth.guard';
import { JwtInterceptor } from './help/jwt.interceptor';
import { ErrorInterceptor } from './help/error.interceptor';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';
import {  UserService } from './services/user.service';
import { AdmincontrolService } from './services/admincontrol.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddMemberComponent } from './add-member/add-member.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatCard, MatCardTitle } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AgmCoreModule } from '@agm/core';
import { CreatetravallComponent } from './createtravall/createtravall.component';
import { MapComponent } from './map/map.component';
import { AdmincontrolComponent } from './admincontrol/admincontrol.component';
import { AlertComponent } from './alert/alert.component';
import { CreateTransportComponent } from './create-transport/create-transport.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { UpdateTransportComponent } from './update-transport/update-transport.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';
import { AboutheaderComponent } from './aboutheader/aboutheader.component';


@NgModule({
  declarations: [
    AppComponent,
    CrewComponent,
    NavComponent,
    TransportationComponent,
    ActivityComponent,
    HeaderComponent,
    TravallComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    AboutComponent,
    CreatetravallComponent,
    MapComponent,
    AdmincontrolComponent,
    AddMemberComponent,
    AlertComponent,
    CreateTransportComponent,
    CreateActivityComponent,
    UpdateTransportComponent,
    UpdateActivityComponent,
    AboutheaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    CommonModule,
    FormsModule,
    NgbModule,
    MatDialogModule,


    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthService,
        UserService,
        AdminService,
        AdmincontrolService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddMemberComponent,
    CreatetravallComponent,
    CreateTransportComponent,
    CreateActivityComponent,
    UpdateTransportComponent,
    UpdateActivityComponent
],
})
export class AppModule { }

