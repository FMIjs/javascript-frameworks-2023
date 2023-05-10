import { Injectable } from '@angular/core';
import { ITodo } from './interfaces';

@Injectable()
export class TodoService {
  todoList: ITodo[] = [];

  addTodo(text: string): void {
    this.todoList.push({ text, completed: false });
  }

  removeTodo(todo: ITodo): void {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }

  toggleCompleted(todo: ITodo) {
    todo.completed = !todo.completed;
  }

}
