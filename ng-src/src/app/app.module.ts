import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// User defined modules
import { AppRoutingModule } from "./modules/app-routing/app-routing.module";
import { HttpInterceptorModule } from './modules/http-interceptor/http-interceptor.module';

// Local imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth.service';

// 3rd party imports
import { FlashMessagesModule } from "angular2-flash-messages";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlashMessagesModule,
    HttpInterceptorModule
  ],
  providers: [    
    ValidateService,
    FlashMessagesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
