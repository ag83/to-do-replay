import React, { Component } from "react";

import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import ToDoPlay from "./ToDoPlay";

import '../styles/todo.scss';

export default class ToDosComponent extends Component {

	constructor() {
        super();
    }
    
    render() {
        
        const addToDo = {
            isPlaying: this.props.isPlaying,
            redactedToDo: this.props.redactedToDo,
            addToDo: this.props.addToDo,
            redactToDo: this.props.redactToDo,
        }

        const toDoList = {
            isPlaying: this.props.isPlaying,
            currentToDoList: this.props.currentToDoList,
            addRedactToDo: this.props.addRedactToDo,
            deleteToDo: this.props.deleteToDo
        }
        const actionsPlayer = {
            isRecorded: this.props.isRecorded,
            isPlaying: this.props.isPlaying,
            recordedActions: this.props.recordedActions.length,
            clearRecords: this.props.clearRecords,
            startRecord: this.props.startRecord,
            endRecord: this.props.endRecord,
            playRecords: this.props.playRecords
        }

		return (
            <div className="td-container">
                <ToDoInput {...addToDo}/>
                <ToDoList {...toDoList} />
                <ToDoPlay {...actionsPlayer}/>
            </div>
		);
	}
}