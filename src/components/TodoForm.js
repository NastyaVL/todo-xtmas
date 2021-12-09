import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Styles.css';

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
        <form className="form" onSubmit={ buttonSumbitHandler }>
            <input
                className="inputText"
                name="task"
                value={todo.task}
                type="text"
                onChange={ inputTodoHandler }
            />
            <button className="submit" type="submit">submit</button>
        </form>
    );
}

export default TodoForm;