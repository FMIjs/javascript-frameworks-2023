import {AdvancedTODO, BasicTODO, CreateAdvancedTODO, CreateBasicTODO, CreateTimedTODO, TimedTODO, Todo} from "./types";

interface ITodoStorage {
    basicTodos: BasicTODO[],
    timedTodos: TimedTODO[],
    advancedTodos: AdvancedTODO[]
}

export class StorageService {
    static todos: ITodoStorage;

    static init() {
        StorageService.todos = {basicTodos: [], timedTodos: [], advancedTodos: []};
    }

    static addBasicTodo(createTodo: CreateBasicTODO){
        if(createTodo.description === undefined) return false;
        const maxId = Math.max(...StorageService.todos.basicTodos.map(el => el.id), 0);
        const todo : BasicTODO = {
            id: maxId + 1,
            description: createTodo.description,
            finished: false
        };

        StorageService.todos.basicTodos.push(todo);
        return todo;
    }

    static addTimedTodo(createTodo: CreateTimedTODO){
        if(createTodo.description === undefined || createTodo.dateAndTime === undefined) return false;
        const maxId = Math.max(...StorageService.todos.timedTodos.map(el => el.id), 1);
        const todo : TimedTODO = {
            id: maxId + 1,
            description: createTodo.description,
            dateAndTime: createTodo.dateAndTime,
            finished: false
        };

        StorageService.todos.timedTodos.push(todo);
        return todo;
    }

    static addAdvancedTodo(createTodo: CreateAdvancedTODO){
        if(createTodo.description === undefined || createTodo.location === undefined || createTodo.dateAndTime === undefined) return false;
        const maxId = Math.max(...StorageService.todos.advancedTodos.map(el => el.id), 1);
        const todo : AdvancedTODO = {
            id: maxId + 1,
            description: createTodo.description,
            location: createTodo.location,
            dateAndTime: createTodo.dateAndTime,
            finished: false
        };

        StorageService.todos.advancedTodos.push(todo);
        return todo;
    }

    static getAllTodos() {
        return [...StorageService.todos.basicTodos, ...StorageService.todos.timedTodos, ...StorageService.todos.advancedTodos];
    }

}
