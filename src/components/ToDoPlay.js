import React, { Component } from "react";


export default class ToDoPlay extends Component {

	constructor() {
        super();

        this.handleRecord = this.handleRecord.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handlePlay() {
        this.props.playRecords();
    }

    handleRecord() {
        if(this.props.isRecorded) {
            this.props.endRecord();
        } else {
            this.props.startRecord();
        }
    }

    handleClear() {
        this.props.clearRecords();
    }
    
    render() {

		return (
            <div className="td-player">
                <button
                    className="td-player__btn td-player__btn_record" 
                    disabled={this.props.isPlaying } 
                    onClick={this.handleRecord} 
                    type="button">
                        {!this.props.isRecorded? 'Record' : 'Stop Recording'}
                </button>
                <button 
                    className="td-player__btn td-player__btn_play" 
                    disabled={this.props.isRecorded || !this.props.recordedActions || this.props.isPlaying} 
                    onClick={this.handlePlay} 
                    type="button">
                        {!this.props.isPlaying? 'Play' : 'Playing'}
                </button>
                <button 
                    className="td-player__btn td-player__btn_clear" 
                    disabled={this.props.isRecorded || this.props.isPlaying || !this.props.recordedActions} 
                    onClick={this.handleClear} 
                    type="button">
                        Clear
                </button>
            </div>
		);
	}
}