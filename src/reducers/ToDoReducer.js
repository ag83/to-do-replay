import { todoAdder, todoRedact, todoDelete, getToDoById } from "../helpers/todoHelpers";

export const ADD_TODO = "ADD_TODO";
export const ADD_REDACT_TODO = "ADD_REDACT_TODO";
export const REDACT_TODO = "REDACT_TODO";
export const DELETE_TODO = "DELETE_TODO";

const initialState = {
    currentToDoList: [],
    redactedToDo: null,
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
        default:
            return state;
    }
}

