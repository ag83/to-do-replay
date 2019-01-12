import React, { Component } from "react";


export default class ToDoInput extends Component {

	constructor(props) {
        super(props);

        this.state = {
            name: props.redactedToDo? props.redactedToDo.name : '',
            description: props.redactedToDo? props.redactedToDo.description : ''
        };

        this.handleToDoChange = this.handleToDoChange.bind(this);
        this.handleToDoSubmit = this.handleToDoSubmit.bind(this);
    }
    
    getDerivedStateFromProps(props, state) {
        if(props.redactedToDo) {
            return {
                name: props.redactedToDo.name,
                description: props.redactedToDo.description
            };
        }
        return null;
    } 
    
    handleToDoChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleToDoSubmit(event) {
        event.preventDefault();
        if (this.checkToDo()) {
            if(this.props.redactedToDo) {
                this.props.redactToDo({...this.props.redactedToDo, name: this.state.name, description: this.state.description});
            } else {
                this.props.addToDo({name: this.state.name, description: this.state.description});
            }
            this.setState({
                name: '',
                description: ''
            });
        }
    }

    checkToDo() {
        if(!this.state.name) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <form className="td-input" onSubmit={this.handleToDoSubmit}>
                <div className="td-input__title">
                    <input 
                        className="td-input__title-input"
                        type="text"
                        placeholder="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleToDoChange}
                        />
                </div>
                <div className="td-input__description">
                    <textarea 
                        className="td-input__description-input"
                        placeholder="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleToDoChange}
                        />
                </div>
                <div className="td-input__submit">
                    <button disabled={!this.checkToDo()} type="submit">{this.props.redactedToDo? 'Redact' : 'Add'}</button>
                </div>    
            </form>
        )
    }
}