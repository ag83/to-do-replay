import { todoAdder, todoRedact, todoDelete, getToDoById } from "../helpers/todoHelpers";

export const ADD_TODO = "ADD_TODO";
export const ADD_REDACT_TODO = "ADD_REDACT_TODO";
export const REDACT_TODO = "REDACT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const START_RECORD = "START_RECORD";
export const END_RECORD = "END_RECORD";
export const CLEAR_RECORD = "CLEAR_RECORD";
export const PLAY_RECORD_START = "PLAY_RECORD_START";
export const PLAY_RECORD_END = "PLAY_RECORD_END";
export const SAVE_RECORD = "SAVE_RECORD";

const initialState = {
    currentToDoList: [],
    redactedToDo: null,
    isRecorded: false,
    isPlaying: false,
    recordedActions: [],
    playStartToDoList: [],
    backUpToDoList: []
};

const addToDo = todoAdder();

export default function todos(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, currentToDoList: [...state.currentToDoList, addToDo(action.payload)]};
        case 'ADD_REDACT_TODO':
            return {...state, redactedToDo: getToDoById(state.currentToDoList, action.payload) }
        case 'REDACT_TODO': 
            return {...state, redactedToDo: null, currentToDoList:  todoRedact(state.currentToDoList, action.payload)}
        case 'DELETE_TODO':
            return {...state, currentToDoList:  todoDelete(state.currentToDoList, action.payload)}
        case 'START_RECORD':
            return {...state, isRecorded: true, playStartToDoList: state.currentToDoList.map((item) => {return {...item}})}
        case 'END_RECORD':
            return {...state, isRecorded: false}
        case 'CLEAR_RECORD':
            return {...state, recordedActions: [], playStartToDoList: []}
        case 'PLAY_RECORD_START':
            let temp = state.currentToDoList.map((item) => {return {...item}});
            return {...state, isPlaying: true, currentToDoList: state.playStartToDoList.map((item) => {return {...item}}), backUpToDoList: temp }
        case 'PLAY_RECORD_END':
            return {...state, isPlaying: false, currentToDoList: state.backUpToDoList}
        case 'SAVE_RECORD':
            return {...state, recordedActions: [...state.recordedActions, action.payload]}
        default:
            return state;
    }
}

