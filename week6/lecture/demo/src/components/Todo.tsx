import React from "react";
import {ITodo} from "../types";

export class Todo extends React.Component<ITodo, any>{
    constructor(props: ITodo) {
        super(props);
    }

    render() {
        return <p>
            <span>{this.props.title}  -   </span>
            <span>{this.props.completed ? 'Completed' : 'Not completed'}</span>
        </p>
    }
}
