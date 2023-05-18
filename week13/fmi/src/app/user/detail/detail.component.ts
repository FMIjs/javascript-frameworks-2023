import { AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements AfterViewInit {
  @Input() user: any;
  @ViewChild('myInput') myInput!: ElementRef<HTMLInputElement>;
  @ContentChild('myDiv') myDiv!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    console.log('View was created', this.myInput);
  }

  ngAfterContentInit() {
    console.log('Content was created', this.myDiv);
  }
}
