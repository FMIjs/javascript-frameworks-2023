import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title-changer',
  templateUrl: './title-changer.component.html',
  styleUrls: ['./title-changer.component.scss']
})
export class TitleChangerComponent {

  @Input() title!: string;
  @Output() changeTitle = new EventEmitter<string>();

  changeTitleHandler(inputEl: HTMLInputElement) {
    const title = inputEl.value;
    this.changeTitle.emit(title);
  }

  inputHandler(event: Event) {
    console.log('Input was changed', (event.target as HTMLInputElement).value);
  }
}


// Monkey patching
// const _setTimeout = window.setTimeout;

// window.setTimeout = function (...args: any[]) {
//   console.log('setTimeout was called');
//   return _setTimeout(...args);
// }