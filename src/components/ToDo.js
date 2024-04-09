/**
 * The ToDo component is a React component that displays a task with options to mark as completed,
 * edit, and delete.
 * @returns The `ToDo` component is being returned. It takes in props `task`, `toggleCompleted`,
 * `deleteTodo`, and `editTodo`, and renders a div with the task text, a pen icon for editing the task,
 * and a trash icon for deleting the task.
 */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const ToDo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`}
                onClick={() => toggleCompleted(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>

    );
};

export default ToDo;