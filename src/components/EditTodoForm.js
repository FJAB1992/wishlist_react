/**
 * The EditToDoForm component in React allows users to edit a specific task within a to-do list.
 * @returns The `EditToDoForm` component is being returned. It is a form that allows users to edit a
 * todo task. The form includes an input field for modifying the task and a submit button to save the
 * changes. When the form is submitted, the `handleSubmit` function is called to update the task using
 * the `editTodo` function.
 */
import React, { useState } from "react";

export const EditToDoForm = ({ editTodo,task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(value);
        editTodo(value, task.id);
        setValue("");
    }
    return (
        <div>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type="text" className="todo-input" value={value}
                    placeholder="Modificar tarea"
                    onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="todo-btn">Modificar tarea</button>
            </form>
        </div>
    );
};

export default EditToDoForm;