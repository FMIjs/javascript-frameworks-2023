import { Component, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../interfaces';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  @Output() addTodo = new EventEmitter<string>();

  addTodoHandler(input: HTMLInputElement) {
    const { value } = input;
    if (!value) { return }
    this.addTodo.emit(value);
    input.value = '';
  }

}
