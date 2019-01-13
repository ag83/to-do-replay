import {
	ADD_TODO,
	REDACT_TODO,
	ADD_REDACT_TODO,
    DELETE_TODO,
    SAVE_RECORD,
    START_RECORD,
    END_RECORD,
    CLEAR_RECORD,
    PLAY_RECORD_START,
    PLAY_RECORD_END
} from "../reducers/ToDoReducer";


export function addToDo(todo) {
    return (dispatch, getState) => {
        const isRecorded = getState().todos.isRecorded;
        if(isRecorded) {
            dispatch(saveAction({            
                type: ADD_TODO,
                payload: {...todo}
            }));
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        });
    }
}

export function redactToDo(todo) {
    return (dispatch, getState) => {
        const isRecorded = getState().todos.isRecorded;
        if(isRecorded) {
            dispatch(saveAction({            
                type: REDACT_TODO,
                payload: {...todo}
            }));
        }
        dispatch({
            type: REDACT_TODO,
            payload: todo
        });
    }
}

export function addRedactToDo(id) {
    return (dispatch, getState) => {
        const isRecorded = getState().todos.isRecorded;
        const action = {
            type: ADD_REDACT_TODO,
            payload: id
        };
        if(isRecorded) {
            dispatch(saveAction(action));
        }
        dispatch(action);
    }
}

export function deleteToDo(id) {
    return (dispatch, getState) => {
        const isRecorded = getState().todos.isRecorded;
        const action = {
            type: DELETE_TODO,
            payload: id
        };
        if(isRecorded) {
            dispatch(saveAction(action));
        }
        dispatch(action);
    }
}

function saveAction(action) {
    return {
		type: SAVE_RECORD,
		payload: action
	};
}

export function startRecord() {
    return {
		type: START_RECORD
	};
}

export function endRecord() {
    return {
		type: END_RECORD
	};
}

export function clearRecords() {
    return {
		type: CLEAR_RECORD
	};
}

export function playRecords() {
    return (dispatch, getState) => {
        const records = getState().todos.recordedActions;
        dispatch({type: PLAY_RECORD_START});
        for (let i=0; i < records.length; i++) {
            setTimeout(() => {
                dispatch(records[i]);
            }, (i+1)*2*1000);
        }
        setTimeout(() => {
            dispatch({type: PLAY_RECORD_END});
        }, (records.length + 1)*2*1000);
    }
}
