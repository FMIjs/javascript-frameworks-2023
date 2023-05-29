import { Directive, ElementRef, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  exportAs: 'underline'
})
export class UnderlineDirective {

  @Input() appUnderline: boolean = false;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const el = (this.elementRef.nativeElement as HTMLElement);
    if (this.appUnderline) {
      el.style.textDecoration = 'underline';
    } else {
      el.style.textDecoration = 'none';
    }
  }

  ngDoCheck() {
  }

  ngOnDestroy() {

  }
}
