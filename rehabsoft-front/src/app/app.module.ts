import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { ApiService } from './services/api.service';
import { JwtInterceptor } from './security/jwt.interceptor';
import { AuthenticationService } from './security/authentication.service';
import { AuthGuard } from './security/auth.guard';
import { ErrorInterceptor } from './security/authentication.interceptor';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeneComponent } from './deneme/dene/dene.component';
import { DenemeservisService } from './services/componentServices/denemeservis.service';
import { NotfoundComponent } from './common/notfound/notfound.component';
import { HomepageComponent } from './common/homepage/homepage.component';
import { UnauthorizedComponent } from './common/unauthorized/unauthorized.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppLayoutComponent,
    LoginComponent,
    RegisterComponent,
    DeneComponent,
    NotfoundComponent,
    HomepageComponent,
    UnauthorizedComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,AuthenticationService,AuthGuard,DenemeservisService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, //giden her requeste JWT token'ını ekliyor dogrulama icin
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  

  ],
  entryComponents:[JwtInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
