export function todoAdder() {
    let id = 0;
    return function(todo) {
        const todoDate = new Date();
        return {
            id: id++,
            created: todoDate,
            name: todo.name,
            description: todo.description
        }
    }
};

export function todoRedact(todos, todo) {
    const updatedToDos = todoDelete(todos, todo.id);
    updatedToDos.push(todo);
    return updatedToDos;
};

export function todoDelete(todos, id) {
    const redactedIndex = todos.findIndex((item) => {
        return item.id === id;
    });
    return [...todos.slice(0, redactedIndex), ...todos.slice(redactedIndex + 1)];
}

export function getToDoById(todos, id) {
    const updatedToDo = todos.find((item) => {
        return item.id === id;
    });
    console.log(id, updatedToDo);
    return {...updatedToDo};
};

