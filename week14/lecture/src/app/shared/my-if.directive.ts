import { Directive, Input, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]',
  exportAs: 'myIf'
})
export class MyIfDirective implements OnChanges, OnDestroy {

  @Input() appMyIf = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnChanges(): void {
    if (this.appMyIf) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  ngOnDestroy(): void {
    this.viewContainerRef.clear();
  }

}
