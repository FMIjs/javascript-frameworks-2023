import { Component, Input } from '@angular/core';
import { ITodo } from '../interfaces';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  // todoList: ITodo[] = this.todoService.todoList;

  get todoList() {
    return this.todoService.todoList;
  }

  constructor(
    private todoService: TodoService
  ) { }

  toggleCompletedHandler(todo: ITodo) {
    this.todoService.toggleCompleted(todo);
  }

  removeHandler(todo: ITodo) {
    this.todoService.removeTodo(todo);
  }
}
