import React, { Component } from "react";

import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {

    render() {
		return (
            <div className="td-list">
                <ul className="td-list__container">
                    {this.props.currentToDoList.map((todo) => {
                        const todoProps = {
                            todo: todo,
                            addRedactToDo: this.props.addRedactToDo,
                            deleteToDo: this.props.deleteToDo
                        }
                        return (
                            <ToDoItem key={todo.id} {...todoProps}/>
                        );
                    })}
                </ul>
            </div>
		);
	}
}