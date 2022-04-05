import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbComponent } from "./navb/navb.component";
import { FootComponent } from "./foot/foot.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { ProfilComponent } from "./profil/profil.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpRequestInterceptor } from "./shared/auth/http.request.interceptor";
import { ToastrModule } from "ngx-toastr";
import { SanitizeHtmlPipe } from "./tool/pipe.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbComponent,
    FootComponent,
    FourOhFourComponent,
    ProfilComponent,
    SanitizeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpRequestInterceptor,
        multi: true,
      },
    ],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
