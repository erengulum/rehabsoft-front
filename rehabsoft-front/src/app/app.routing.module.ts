import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { DeneComponent } from './deneme/dene/dene.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './security/auth.guard';
import {NotfoundComponent} from "./common/notfound/notfound.component";
import { HomepageComponent } from './common/homepage/homepage.component';
import {UnauthorizedComponent} from "./common/unauthorized/unauthorized.component"

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,canActivate: [AuthGuard], //her durumda bu olacak yani.Altında da tanımlı sayfalardan bir tane (childlardan birisi.)
    children: [

      {path: 'homepage',component:HomepageComponent},
      {path: 'deneme', component: DeneComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:"unauthorized",component:UnauthorizedComponent},
  {path: '**', component: NotfoundComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}