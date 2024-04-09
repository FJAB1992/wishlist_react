/**
 * The ToDoWrapper component manages a list of todos with functionalities to add, toggle completion,
 * delete, edit tasks, and display todo items.
 * @returns The `ToDoWrapper` component is being returned. Inside the component, there is a div with
 * the className "TodoWrapper" containing an h1 element with the text "Tareas pendientes". It also
 * includes a `ToDoForm` component for adding new todos and maps over the `todos` array to display each
 * todo item. Each todo item is rendered either as an `EditToDoForm` component
 */
import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid';
import ToDo from "./ToDo";
import EditToDoForm from "./EditTodoForm";
uuidv4();
export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodo = {
            id: uuidv4(), task: todo, completed: false, isEditing: false
        };

        setTodos([...todos, newTodo]);
        console.log(todos);
    }

    const toggleCompleted = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? 
            { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? 
            { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className="TodoWrapper">
            <h1>Tareas pendientes</h1>
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (<EditToDoForm editTodo={editTask} task={todo} />) :
                    (
                        <ToDo task={todo} key={index} toggleCompleted={toggleCompleted}
                            deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
            ))}

        </div>
    );
};

export default ToDoWrapper;
