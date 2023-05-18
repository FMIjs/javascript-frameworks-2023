import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderlineDirective } from './underline.directive';
import { MyIfDirective } from './my-if.directive';



@NgModule({
  declarations: [
    UnderlineDirective,
    MyIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UnderlineDirective,
    MyIfDirective
  ]
})
export class SharedModule { }
