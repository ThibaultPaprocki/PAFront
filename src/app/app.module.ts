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
import { ColaboratoryComponent } from './colaboratory/colaboratory.component';
import {AngularEditorModule} from "@geargroup/angular-editor";
import {MonacoEditorModule} from "ngx-monaco-editor";
import { SearchComponent } from './search/search.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { LightProfilComponent } from './light-profil/light-profil.component';

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
    ColaboratoryComponent,
    SearchComponent,
    LightProfilComponent,
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
    AngularEditorModule,
    MonacoEditorModule.forRoot(),
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
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
