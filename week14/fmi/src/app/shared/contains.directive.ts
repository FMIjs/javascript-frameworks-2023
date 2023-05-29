import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export function containsValidator(value: string) {
  return (control: AbstractControl<any, any>): ValidationErrors | null => {
    if ((control.value as string | null)?.includes(value)) { return null; }
    return { mustContain: value };
  };
}

@Directive({
  selector: '[ngModel][appContains]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ContainsDirective,
      multi: true
    }
  ]
})
export class ContainsDirective implements Validator {

  @Input() appContains!: string;
  constructor() {
    console.log('appContains');
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return containsValidator(this.appContains)(control);
  }

}
