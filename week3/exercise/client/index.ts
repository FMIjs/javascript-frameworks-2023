import {Todo} from "../server/lib/types";

const fetchTodos = () => {
    return new Promise<Todo>((resolve, reject) => {
        fetch('http://localhost:8050/api/todos', {}).then(res => res.json()).then(resolve).catch(reject);
    });
}
