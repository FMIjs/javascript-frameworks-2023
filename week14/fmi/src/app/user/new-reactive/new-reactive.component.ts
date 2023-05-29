import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { containsValidator } from 'src/app/shared/contains.directive';

@Component({
  selector: 'app-new-reactive',
  templateUrl: './new-reactive.component.html',
  styleUrls: ['./new-reactive.component.scss']
})
export class NewReactiveComponent {
  formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    // [value, [syncValidators], [asyncValidators]]
    name: ['', [Validators.required, Validators.minLength(4), containsValidator('@')], []],
    age: ['', [Validators.required], []],
    // address: this.formBuilder.array([])
  });

  getFormControl(name: keyof typeof this.form.controls) {
    return this.form.controls[name];
  }

  submitFormHandler(): void {
    console.log(this.form.value);
  }
}
