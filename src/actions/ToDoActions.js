import {
	ADD_TODO
} from "../reducers/ToDoReducer";


export function addToDo(todo) {
	return {
        type: ADD_TODO,
        payload: todo
	};
}

