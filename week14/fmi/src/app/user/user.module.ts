import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UserService } from './user.service';
import { SharedModule } from '../shared/shared.module';
import { UserGroupNamesPipe } from './user-group-names.pipe';
import { NewComponent } from './new/new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewReactiveComponent } from './new-reactive/new-reactive.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    UserGroupNamesPipe,
    NewComponent,
    NewReactiveComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  exports: [
    ListComponent,
    NewComponent,
    NewReactiveComponent
  ]
})
export class UserModule { }
