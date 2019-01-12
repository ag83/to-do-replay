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
    const updatedToDos = todoDelete(todos, todo.id)
    return updatedToDos.push(todo);
};

export function todoDelete(todos, id) {
    const redactedIndex = todos.findIndex((item) => {
        return item.id === id;
    });
    return [...todos.slice(0, redactedIndex), ...todos.slice(redactedIndex + 1)];
}

