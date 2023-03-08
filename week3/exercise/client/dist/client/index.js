"use strict";
const fetchTodos = () => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8050/api/todos', {}).then(res => res.json()).then(resolve).catch(reject);
    });
};
