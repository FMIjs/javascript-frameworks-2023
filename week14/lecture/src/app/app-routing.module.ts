import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";

import { AuthActivate, AuthLoad, TestDeactivate } from "./guards";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: HomeComponent,
    title: 'App | Home',
    canActivate: [AuthActivate],
    canDeactivate: [TestDeactivate]
  },

  {
    path: 'login',
    component: LoginComponent,
    title: 'App | Login',
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'App | About',
    canActivate: [AuthActivate]
  },


  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [AuthActivate],
    canLoad: [AuthLoad],
    data: {
      someData: '123'
    }
  },
  {
    path: '**',
    component: ErrorComponent,
    title: 'App | Error'
  }
];


export const AppRoutingModule = RouterModule.forRoot(routes);