import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderlineDirective } from './underline.directive';
import { MyIfDirective } from './my-if.directive';
import { ContainsDirective } from './contains.directive';



@NgModule({
  declarations: [
    UnderlineDirective,
    MyIfDirective,
    ContainsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UnderlineDirective,
    MyIfDirective,
    ContainsDirective
  ]
})
export class SharedModule { }
