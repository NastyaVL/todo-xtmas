import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function inputTodoHandler(e) {
        setTodo({
            ...todo,
            task: e.target.value
        });
    }

    function buttonSumbitHandler(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuidv4()});
            setTodo({...todo, task: ""});
        }
    }

    return(
        <form onSubmit={ buttonSumbitHandler }>
            <input
                name="task"
                value={todo.task}
                type="text"
                onChange={ inputTodoHandler }
            />
            <button type="submit">submit</button>
        </form>
    );
}

export default TodoForm;