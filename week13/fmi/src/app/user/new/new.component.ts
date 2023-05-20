import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface INewUserForm {
  name: string;
  age: string;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  age = '2000';

  @ViewChild('form', { read: NgForm, static: true }) form!: NgForm;

  onFormSubmit(fromValue: INewUserForm): void {
    console.log(fromValue);
    // const value = $event.value as INewUserForm;
    // console.log($event, value);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

}
