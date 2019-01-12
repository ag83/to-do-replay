import {
	ADD_TODO,
	REDACT_TODO,
	ADD_REDACT_TODO,
	DELETE_TODO
} from "../reducers/ToDoReducer";


export function addToDo(todo) {
	return {
        type: ADD_TODO,
        payload: todo
	};
}

export function redactToDo(todo) {
	return {
        type: REDACT_TODO,
        payload: todo
	};
}

export function addRedactToDo(todo) {
	return {
        type: ADD_REDACT_TODO,
        payload: todo
	};
}

export function deleteToDo(id) {
	return {
        type: DELETE_TODO,
        payload: id
	};
}
