import React from "react";
import {ITodo, ITodoState} from "../types";
import {Todo} from "./Todo";

export class TodoList extends React.Component<{}, ITodoState>{
    constructor(props: ITodo) {
        super(props);

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(todos => this.setState({todos: todos}));
        console.log('Component mounted');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    componentDidUpdate(prevProps: Readonly<ITodo>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('Component did update', prevProps, prevState);
    }

    render() {
        return <>{this.state.todos.map(todo => <Todo title={todo.title} completed={todo.completed} id={todo.id} />)}</>
    }
}
