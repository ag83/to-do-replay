export const ADD_TODO = "ADD_TODO";

const initialState = {

};

export default function todos(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state};
        default:
            return state;
    }
}