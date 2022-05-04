import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { ProfilComponent } from "./profil/profil.component";
import { AuthGuard } from "./shared/auth/auth.gard";
import {ColaboratoryComponent} from "./colaboratory/colaboratory.component";
import {SearchComponent} from "./search/search.component";
import {LightProfilComponent} from "./light-profil/light-profil.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profil", component: ProfilComponent},
  { path: "light_profil/:nameUser", component: LightProfilComponent},
  { path: "colaboratory", component: ColaboratoryComponent},
  { path: "search", component: SearchComponent},
  { path: "404", component: FourOhFourComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
