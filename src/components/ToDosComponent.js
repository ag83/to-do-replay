import React, { Component } from "react";

import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoPlay from "./ToDoPlay";

import '..//styles/todo.css';

export default class ToDosComponent extends Component {

	constructor() {
        super();
    }
    
    render() {
        const addToDo = {
            redactedToDo: this.props.redactedToDo,
            addToDo: this.props.addToDo,
            redactToDo: this.props.redactToDo,
        }

        const toDoList = {
            currentToDoList: this.props.currentToDoList,
            addRedactToDo: this.props.addRedactToDo,
            deleteToDo: this.props.deleteToDo
        }

		return (
            <div className="td-container">
                <ToDoInput {...addToDo}/>
                <ToDoList {...toDoList} />
                <ToDoPlay/>
            </div>
		);
	}
}