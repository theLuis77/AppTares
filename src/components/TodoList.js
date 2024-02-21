import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import todos from "../todos.json";

    const TodoCard = styled.div`
    border: 1px solid #ccc;
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 5px;
    `;

    const StyledLink = styled(Link)`
    display: inline-block;
    margin-right: 1em;
    text-decoration: none;
    background-color: grey;
    color: white;
    padding: 0.5em 1em;
    border-radius: 5px;
    `;

const TodoList = () => {
    const [state, setState] = useState(todos);
    const [newTodo, setNewTodo] = useState("");
    const { id } = useParams();

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state));
    }, [state]);

    const handleComplete = (todo) => {
        setState(
            state.map((t) =>
                t.id === todo.id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const handleAddTodo = () => {
        const todo = {
            id: Math.max(...state.map((t) => t.id)) + 1,
            userId: Number(id),
            title: newTodo,
            completed: false,
        };
        setState([...state, todo]);
        setNewTodo("");
    };

    return (
        <div>
            <StyledLink to={`/users/${id}`}>Ver perfil del usuario</StyledLink>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Agregar tarea</button>
            {state
                .filter((todo) => todo.userId === Number(id))
                .map((todo) => (
                    <TodoCard key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleComplete(todo)}
                        />
                        <label>{todo.title}</label>
                    </TodoCard>
                ))}
        </div>
    );
};

export default TodoList;
