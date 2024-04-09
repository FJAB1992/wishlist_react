/**
 * The ToDoForm component is a form in React that allows users to input and submit tasks to be added to
 * a to-do list.
 * @returns The `ToDoForm` component is being returned, which is a form for adding a new todo item. It
 * consists of an input field for entering the todo item, a submit button for adding the todo item, and
 * a form element that handles the submission of the todo item.
 */
import React, { useState } from "react";

export const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(value);
        addTodo(value);
        setValue("");
    }
    return (
        <div>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type="text" className="todo-input" value={value}
                    placeholder="¿Que hay que hacer hoy?"
                    onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="todo-btn">Añadir tarea</button>
            </form>
        </div>
    );
};

export default ToDoForm;