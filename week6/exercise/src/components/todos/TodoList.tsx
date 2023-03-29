import React, {useContext} from "react";
import {ITodo, ITodoState} from "../../lib/types";
import {Todo} from "./Todo";
import axios from "axios";
import {TodoService} from "../../lib/services/todo-service";
import {UserContext, UserInfoContext} from "../../context/UserContext";

export class TodoList extends React.Component<{children?: React.ReactNode[]}, ITodoState>{
    private todoService: TodoService;
    private didMountRef: React.MutableRefObject<any>;
    private headerRef: React.RefObject<HTMLHeadingElement>;
    static contextType = UserContext
    context!: React.ContextType<typeof UserContext>;
    constructor(props: {children: React.ReactNode[]}) {
        super(props);
        this.todoService = new TodoService();
        this.didMountRef = React.createRef();
        this.didMountRef.current = false;
        this.headerRef = React.createRef();

        this.state = {
            todos: [],
            titleFilter: ''
        }
    }

    componentDidMount() {
        if(!this.didMountRef.current){
            this.didMountRef.current = true;
            this.todoService.getAllTodos(100).then(res => this.setState({todos: res || []}));
        }
        // console.log('Component mounted');
    }

    componentWillUnmount() {
        // console.log('Component will unmount');
    }

    componentDidUpdate(prevProps: Readonly<{children: React.ReactNode[]}>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.headerRef.current){
            this.headerRef.current.innerText += this.state.titleFilter;
        }
        // console.log('TodoList: Component did update');
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<ITodoState>, nextContext: any): boolean {
        return true;
    }

    handleTodoCompleted = (todo: ITodo) => {
        const filteredTodos = this.state.todos.filter(t => t.id !== todo.id);
        this.setState({todos: filteredTodos});
    }

    authenticateUser = () => {
        this.context.updateUserInfo({userName: 'Alex', authenticated: true});
    }

    render() {
        return <>
            <button onClick={this.authenticateUser}>Authenticate me</button>
            <h4 ref={this.headerRef}>{"The filtered value is: "}</h4>
            <input type={'text'} value={this.state.titleFilter} onChange={e => this.setState({titleFilter: e.target.value})} />
            {this.state.todos.map(todo => <Todo todo={todo} onTodoCompleted={this.handleTodoCompleted} />)}
        </>
    }
}
