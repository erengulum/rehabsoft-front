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
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin/admin.component';
import { Role } from './models/role';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},
{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},
{
    path: 'login',
    component: LoginComponent
},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:"unauthorized",component:UnauthorizedComponent},
  {path: 'deneme', component: DeneComponent},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}