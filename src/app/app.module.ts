import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { GlobalVars }   from './services/globalVars';
import { Cache }   from './services/cache';
import { ProjectUtils } from './services/utils';

import {UserService} from './services/user.service';

import {CommonInterceptor} from './http/CommonInterceptor';

import {DirectivesComponentModule} from './directives-component/directives-component.module';

import { ComponentsBonitaModule } from './components-bonita/components-bonita.module';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';

import { AuthGuard, NoLogin }   from './auth/authguard';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    
    AppRoutingModule,
    
    DirectivesComponentModule,
    
    ComponentsBonitaModule
  ],
  providers: [
    GlobalVars,
    Cache,
    ProjectUtils,
    
    UserService,
    
    AuthGuard,
    NoLogin,
    
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
