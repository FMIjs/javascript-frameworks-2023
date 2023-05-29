import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements AfterViewInit {
  @Input() user: any;
  @Output() newUser = new EventEmitter<string>();
  @ViewChild('myInput') myInput!: ElementRef<HTMLInputElement>;
  @ContentChild('myDiv') myDiv!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    console.log('View was created', this.myInput);
  }

  // getUserGroupNames(user: any) {
  //   return user.groups.map((g: any) => g.name);
  // }

  handler($event: any) {
    this.newUser.emit($event);
  }

  ngAfterContentInit() {
    console.log('Content was created', this.myDiv);
  }
}
