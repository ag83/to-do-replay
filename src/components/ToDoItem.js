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
                    <li className="td-list__item" >
                        <h4 className="td-list__title" >{this.props.todo.name}</h4>
                        <div className="td-list__description" >{this.props.todo.description}</div>
                        <div className="td-list__date" >{this.props.todo.created.toISOString()}</div>
                        <div className="td-list__btns">
                            <button className="td-list__btn-redact" onClick={this.handleRedact}>&#9998;</button>
                            <button className="td-list__btn-delete" onClick={this.handleDelete}>&#x2715;</button>
                        </div>
                    </li>
                );

	}
}