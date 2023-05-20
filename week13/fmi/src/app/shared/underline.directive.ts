import { Directive, ElementRef, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  exportAs: 'underline'
})
export class UnderlineDirective {

  @Input() appUnderline: boolean = false;
  // @Input() set appUnderline(hasUnderline: boolean) {
  //   const el = (this.elementRef.nativeElement as HTMLElement);
  //   if (hasUnderline) {
  //     el.style.textDecoration = 'underline';
  //   } else {
  //     el.style.textDecoration = 'none';
  //   }
  // }

  constructor(private elementRef: ElementRef) {
    console.log('underline was created', this.elementRef);
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    const el = (this.elementRef.nativeElement as HTMLElement);
    if (this.appUnderline) {
      el.style.textDecoration = 'underline';
    } else {
      el.style.textDecoration = 'none';
    }
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {

  }
}
