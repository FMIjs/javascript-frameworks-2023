import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";
import { UserListResolver } from "./resolvers/user-list.resolve";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent,
    resolve: {
      users: UserListResolver
    }
  },
  {
    path: ':id',
    component: DetailComponent,
    title: 'App | User'
  }
];


export const UserRoutingModule = RouterModule.forChild(routes);