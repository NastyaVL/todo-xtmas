import React from 'react';

function Todo({todo, toggleComplete, removeTodo}) {
    function checkBoxClickHandler() {
        toggleComplete(todo.id);
    }

    function removeClickHandler() {
        removeTodo(todo.id);
    }

    return (
        <div style={{display: "flex"}}>
            <input type="checkbox" onClick={ checkBoxClickHandler } />
            <li style={{
                color: "white",
                textDecoration: todo.completed ? "line-through" : null
            }}>{todo.task}</li>
            <button onClick={ removeClickHandler }>X</button>
        </div>
    );
}

export default Todo;