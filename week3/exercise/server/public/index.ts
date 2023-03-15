import {BasicTODO, CreateBasicTODO, Todo} from "../lib/types";

let data : Todo[] = [];

const fetchTodos = () => {
    fetch('/api/todos').then(res => res.json()).then(res => {
        const newData : Todo[] = res;
        clearTodos();
        if(newData.length > 0){
            newData.forEach(appendTodo);
        }else{
            appendNoTodosText();
        }
    });
}

const isBasicTodo = (todo: Todo) : todo is BasicTODO => {
    return !('location' in todo) && !('dateAndTime' in todo);
}

const isTimedTodo = (todo: Todo) : todo is BasicTODO => {
    return !('location' in todo) && ('dateAndTime' in todo);
}

const isAdvancedTodo = (todo: Todo) : todo is BasicTODO => {
    return ('location' in todo);
}

const handleCompleteTodo = (todo: Todo) => {
    let todoType : 'basic' | 'timed' | 'advanced' | undefined = undefined;
    if(isBasicTodo(todo))
        todoType = 'basic';
    else if (isTimedTodo(todo))
        todoType = 'timed'
    else if (isAdvancedTodo(todo))
        todoType = 'advanced';

    if(todoType === undefined)
        return;

    fetch(`/api/${todoType}/${todo.id}/complete`, {method: 'PUT'}).then(res => res.json()).then(res => {
        if(res){
            fetchTodos();
        }
    })
}

const clearTodos = () => {
    const todosWrapper = document.getElementById("todos-wrapper");
    if(todosWrapper){
        todosWrapper.innerHTML = '';
    }
}

const appendTodo = (todo: Todo) => {
    const todosWrapper = document.getElementById("todos-wrapper");
    if(!todosWrapper) return;

    const todoEl = document.createElement("div");
    todoEl.classList.add('todo');

    const todoLabelEl = document.createElement('label');
    todoLabelEl.innerText = todo.description;

    const todoOperationsEl = document.createElement("span");
    todoOperationsEl.classList.add('todo-operations');

    const completeTodoCheckbox = document.createElement('input');
    completeTodoCheckbox.type = 'checkbox';
    completeTodoCheckbox.title = 'Complete TODO';
    completeTodoCheckbox.addEventListener('click', () => handleCompleteTodo(todo))

    const editTodoButton = document.createElement('button');
    editTodoButton.classList.add('edit-button');
    editTodoButton.title = 'Edit TODO';

    const editTodoIcon = document.createElement('i');
    editTodoIcon.classList.add('fa');
    editTodoIcon.classList.add('fa-pencil');

    editTodoButton.appendChild(editTodoIcon);
    todoOperationsEl.appendChild(completeTodoCheckbox);
    todoOperationsEl.appendChild(editTodoButton);
    todoEl.appendChild(todoLabelEl);
    todoEl.appendChild(todoOperationsEl);
    todosWrapper.appendChild(todoEl);
}

const appendNoTodosText = () => {
    const todosWrapper = document.getElementById("todos-wrapper");
    if (todosWrapper){
        const noTodosHeader = document.createElement("h3");
        noTodosHeader.innerText = "No records";
        todosWrapper.appendChild(noTodosHeader);
    }
}


//Form

const handleTodoTypeChange = (type: 'basic' | 'timed' | 'advanced') => {
    const formInputsEl = document.getElementById('todo-form-inputs');
    if(formInputsEl){
        //Delete all inputs
        formInputsEl.innerHTML = "";

        const descriptionInput = document.createElement('input');
        descriptionInput.type = 'input';
        descriptionInput.name = 'description';
        descriptionInput.placeholder = 'Description';
        descriptionInput.required = true;

        const dateAndTimeInput = document.createElement('input');
        dateAndTimeInput.type = 'datetime-local';
        dateAndTimeInput.name = 'dateAndTime';
        dateAndTimeInput.placeholder = 'Date';
        dateAndTimeInput.required = true;

        const locationInput = document.createElement('input');
        locationInput.type = 'input';
        locationInput.name = 'location';
        locationInput.placeholder = 'Location';
        locationInput.required = true;

        const description = document.createElement('div');
        description.appendChild(descriptionInput);
        const dateAndTime = document.createElement('div');
        dateAndTime.appendChild(dateAndTimeInput);
        const location = document.createElement('div');
        location.appendChild(locationInput);

        if(type === 'basic'){
            formInputsEl.appendChild(description);
        } else if(type == 'timed'){
            formInputsEl.appendChild(description);
            formInputsEl.appendChild(dateAndTime);
        } else if(type === 'advanced') {
            formInputsEl.appendChild(description);
            formInputsEl.appendChild(dateAndTime);
            formInputsEl.appendChild(location);
        }
    }
}

const handleSubmit = async (e : any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    //@ts-ignore
    const formProps : Todo & {'todo-type': 'basic' | 'advanced' | 'timed'} = Object.fromEntries(formData);
    if(formProps["todo-type"] === 'basic'){
        await createBasicTodo({description: formProps.description})
    } else if(formProps["todo-type"] == 'timed'){
    } else if(formProps["todo-type"] === 'advanced') {
    }

    e.target.reset();
    console.log(formData)
}

const createBasicTodo = async (todo: CreateBasicTODO) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(todo);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };

    const result = await fetch('/api/basic', requestOptions).then(res => res.json());
    fetchTodos();
}
