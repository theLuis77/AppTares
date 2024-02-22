import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addTodo, fetchTodos, toggleTodo } from "../actions";


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
    const dispatch = useDispatch(); // Crea una función dispatch
    const {todos} = useSelector(state => state.todos); // Accede al estado de los todos

    const [newTodo, setNewTodo] = useState("");
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchTodos()); // Despacha la acción fetchTodos
      }, [dispatch]);

      const handleComplete = (todo) => {
        dispatch(toggleTodo(todo.id)); // Despacha la acción toggleTodo
      };
    
      const handleAddTodo = () => {
        const todo = {
          id: Math.max(...todos.map((t) => t.id)) + 1,
          userId: Number(id),
          title: newTodo,
          completed: false,
        };
        dispatch(addTodo(todo)); // Despacha la acción addTodo
        setNewTodo("");
      };

    return (
        <div>
            <div className="Contenedor-cabecera">
                <StyledLink to={`/users/${id}`}>Ver los perfiles de usuario</StyledLink>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nueva tarea" 
                    aria-label="Nueva tarea" aria-describedby="button-addon2" value={newTodo}  onChange={(e) => setNewTodo(e.target.value)}/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleAddTodo}>Insertar tareas </button>
                </div>
            </div>
            {todos
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
