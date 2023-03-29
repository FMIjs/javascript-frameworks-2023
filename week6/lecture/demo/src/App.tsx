import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./components/TodoList";
import {ITodo} from "./types";

function App() {

    return <>
        <TodoList />
    </>
}

export default App;
