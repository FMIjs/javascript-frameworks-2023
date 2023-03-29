import React from "react";
import {ITodo} from "../../lib/types";
import styled from "styled-components";

const TodoWrapper = styled.p<{completed: boolean}>`
    color: ${(props: any) => props.completed ? "green" : "red"};
`

interface TodoProps {
    todo: ITodo;
    onTodoCompleted: (todo: ITodo) => void;
}

export class Todo extends React.PureComponent<TodoProps, any>{
    constructor(props: TodoProps) {
        super(props);
    }

    componentDidUpdate(prevProps: Readonly<TodoProps>, prevState: Readonly<{}>, snapshot?: any) {
        // console.log('Todo: Component did update');
    }

    // shouldComponentUpdate(nextProps: Readonly<ITodo>, nextState: Readonly<any>, nextContext: any): boolean {
    //     if(nextProps.completed !== this.props.completed || nextProps.title !== this.props.title || nextProps.id !== this.props.id)
    //         return true;
    //     return false;
    // }

    render() {
        return <TodoWrapper completed={this.props.todo.completed}>
            <span style={{color: 'red'}}>{this.props.todo.title}  -   </span>
            <span>{this.props.todo.completed ? 'Completed' : 'Not completed'}</span>
            <button type={'button'} onClick={() => this.props.onTodoCompleted(this.props.todo)}>Complete me</button>
        </TodoWrapper>
    }
}
