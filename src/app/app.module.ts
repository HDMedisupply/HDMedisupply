import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// forms module
import {FormsModule} from '@angular/forms'; // do not forget imports below!!!!
// jwt
import { JwtModule } from '@auth0/angular-jwt';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material
import { MatSliderModule} from '@angular/material/slider';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule, // has multiple functionalities regarding browsers
    FormsModule,
    AppRoutingModule, // routing information
    HttpClientModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:tokenGetter,
        whitelistedDomains: ['localhost']
      }
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]// when application start it run this component
})
export class AppModule { }
