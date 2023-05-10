import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() text!: string;
  @Input() completed!: boolean;

  @Output() toggleCompleted = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter<void>()

  toggleCompletedHandler() {
    this.toggleCompleted.emit(!this.completed);
  }

  removeHandler() {
    this.remove.emit();
  }
}
