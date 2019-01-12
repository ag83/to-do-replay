import React, { Component } from "react";


export default class ToDoItem extends Component {

	constructor(props) {
        super(props);

        this.handleRedact = this.handleRedact.bind(this, props.todo.id);
        this.handleDelete = this.handleDelete.bind(this, props.todo.id);
    }

    handleDelete(id, evt) {
        this.props.deleteToDo(id);
    }

    handleRedact(id, evt) {
        this.props.addRedactToDo(id);
    }
    
    render() {
        return (    
                    <li>
                        <h4>{this.props.todo.name}</h4>
                        <div>{this.props.todo.description}</div>
                        <div>{this.props.todo.created.toISOString()}</div>
                        <div>
                            <button onClick={this.handleRedact}>redact</button>
                            <button onClick={this.handleDelete}>delete</button>
                        </div>
                    </li>
                );

	}
}