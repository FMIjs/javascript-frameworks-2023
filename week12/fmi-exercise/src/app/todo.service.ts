import { Injectable } from '@angular/core';
import { ITodo } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = [];

  addTodo(text: string): void {
    // this.todoList.push({ text, completed: false });
    // this.todoList = this.todoList.concat({ text, completed: false });
    this.todoList = [...this.todoList, { text, completed: false }];
  }

  removeTodo(todo: ITodo): void {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }

  toggleCompleted(todo: ITodo) {
    todo.completed = !todo.completed;
  }
}
