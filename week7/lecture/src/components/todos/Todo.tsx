import React, {useEffect} from "react";
import {ITodo} from "../../lib/types";
import styled from "styled-components";

const TodoWrapper = styled.p<{ completed: boolean }>`
  color: ${(props: any) => props.completed ? "green" : "red"};
`

interface TodoProps {
    todo: ITodo;
    updateTodoCompleted: (todo: ITodo) => void;
}

export const Todo = (props: TodoProps) => {

    useEffect(() => {
        // console.log('Todo with id ' + props.todo.id + ' updated.')
    });


    return <TodoWrapper completed={props.todo.completed}>
        <span >{props.todo.id} -   </span>
        <span >{props.todo.title} -   </span>
        <span>{props.todo.completed ? 'Completed' : 'Not completed'}</span>
        <button type={'button'} onClick={() => props.updateTodoCompleted(props.todo)}>{props.todo.completed ? 'UnComplete me' : 'Complete me'}</button>
    </TodoWrapper>
}
