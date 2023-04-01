import React, {useContext} from 'react';
import {TodoList} from "./components/todos/TodoList";
import './lib/axiosInterceptor';
import {UserContext} from "./context/UserContext";
import {FTodoList} from "./components/todos/FTodoList";

function App() {
    const userContext = useContext(UserContext);

    return <>
        {/*<h1>{userContext.userInfo.authenticated ? "User is authenticated" : "User is not authenticated"}</h1>*/}
        {/*<TodoList />*/}
        {<FTodoList />}
    </>
}

export default App;
