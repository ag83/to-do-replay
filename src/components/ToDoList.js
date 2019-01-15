import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {

    render() {
		return (
            <div className="td-list">
                <ul className="td-list__container">
                    <ReactCSSTransitionGroup
                        transitionName="todo"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {this.props.currentToDoList.map((todo) => {
                            const todoProps = {
                                todo: todo,
                                addRedactToDo: this.props.addRedactToDo,
                                deleteToDo: this.props.deleteToDo
                            }
                            return (
                                <ToDoItem  key={todo.id} {...todoProps}/>
                            );
                        })}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
		);
	}
}