import React from 'react';
import './Styles.css';

function Todo({todo, toggleComplete, removeTodo}) {
    function checkBoxClickHandler() {
        toggleComplete(todo.id);
    }

    function removeClickHandler() {
        removeTodo(todo.id);
    }

    return (
        <div style={{display: "flex"}}>
            <input type="checkbox" className="checkbox" onClick={ checkBoxClickHandler } />
            <li className="listItem" style={{
                "list-style": "none",
                color: 'white',
                width: "500px",
                height: "40px",
                textDecoration: todo.completed ? "line-through" : null
            }}>{todo.task}</li>
            <button className="buttonDelete" onClick={ removeClickHandler }>X</button>
        </div>
    );
}

export default Todo;