import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {TodoService} from "../../lib/services/todo-service";
import {ITodo} from "../../lib/types";
import {Todo} from "./Todo";
import {UserContext} from "../../context/UserContext";
import cloneDeep from 'lodash.clonedeep'

const todoService = new TodoService();
export const FTodoList = (props: any) => {
    const fCounterCache = useRef<Record<number, number>>({});

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [counter, setCounter] = useState(0);
    const didMountRef = useRef(false);
    const userContext = useContext(UserContext);

    const completedTodos = todos.filter(todo => todo.completed).length;

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            console.log('component mounted');
            todoService.getAllTodos(1).then(res => {
                setTodos(res || []);
            });
        }
    }, []);

    const updateTodoCompleted = useCallback((todo: ITodo) => {
        const todosCopy: ITodo[] = cloneDeep(todos);

        const todoToComplete = todosCopy.find(el => el.id === todo.id);
        if (todoToComplete)
            todoToComplete.completed = !todoToComplete.completed;
        setTodos(todosCopy)

    }, [todos]);

    const completeFirstTodo = () => {
        setTodos([{...todos[0], completed: true}, ...todos.slice(1)]);
    }

    const fCounter = (counter: number) => {
        console.log('Calculating f(' + counter + ')');
        return counter * 5 * Math.sin(Math.PI * Math.sqrt(counter));
    }

    const res = useMemo(() => {
        if(fCounterCache.current[counter] !== undefined){
            return fCounterCache.current[counter];
        }else{
            fCounterCache.current[counter] = fCounter(counter);
            return fCounterCache.current[counter];
        }
    }, [counter]);


    return <>
        <h3>f(counter): {res}</h3>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <h3>Completed todos count: {completedTodos}</h3>
        {/*{userContext.userInfo.authenticated ? 'User is authenticated' : 'User is not authenticated'}*/}
        {todos.map(todo => <Todo key={todo.id} todo={todo} updateTodoCompleted={updateTodoCompleted}/>)}
    </>
}
