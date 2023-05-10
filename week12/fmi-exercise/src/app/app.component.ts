import { Component } from '@angular/core';
import { ITodo } from './interfaces';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private todoService: TodoService) { }

  addTodoHandler(text: string): void {
    this.todoService.addTodo(text);
  }

}
