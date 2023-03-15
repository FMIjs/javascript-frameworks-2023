import {AdvancedTODO, BasicTODO, CreateAdvancedTODO, CreateBasicTODO, CreateTimedTODO, TimedTODO, Todo} from "./types";

// interface ITodoStorage {
//     basicTodos: BasicTODO[],
//     timedTodos: TimedTODO[],
//     advancedTodos: AdvancedTODO[]
// }

export class StorageService {
    private static todos: Todo[];

    static init() {
        StorageService.todos = [];
    }

    static addBasicTodo(createTodo: CreateBasicTODO){
        if(createTodo.description === undefined) return false;
        const maxId = Math.max(...StorageService.todos.map(el => el.id), 0);
        const todo : BasicTODO = {
            id: maxId + 1,
            description: createTodo.description,
            finished: false
        };

        StorageService.todos.push(todo);
        return todo;
    }

    static addTimedTodo(createTodo: CreateTimedTODO){
        if(createTodo.description === undefined || createTodo.dateAndTime === undefined) return false;
        const maxId = Math.max(...StorageService.todos.map(el => el.id), 0);
        const todo : TimedTODO = {
            id: maxId + 1,
            description: createTodo.description,
            dateAndTime: createTodo.dateAndTime,
            finished: false
        };

        StorageService.todos.push(todo);
        return todo;
    }

    static addAdvancedTodo(createTodo: CreateAdvancedTODO){
        if(createTodo.description === undefined || createTodo.location === undefined || createTodo.dateAndTime === undefined) return false;
        const maxId = Math.max(...StorageService.todos.map(el => el.id), 0);
        const todo : AdvancedTODO = {
            id: maxId + 1,
            description: createTodo.description,
            location: createTodo.location,
            dateAndTime: createTodo.dateAndTime,
            finished: false
        };

        StorageService.todos.push(todo);
        return todo;
    }

    static completeTodo(todoId: number) {
        const todo = StorageService.todos.find(el => el.id === todoId);
        if(todo){
            todo.finished = true;
            return true;
        } else {
            return false;
        }
    }

    static getAllTodos() {
        return StorageService.todos.filter(el => !el.finished);
    }

}
