export const setTodos = todos => ({
    type: 'SET_TODOS',
    payload: todos,
  });
  
  export const addTodo = todo => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  
  export const toggleTodo = todoId => ({
    type: 'TOGGLE_TODO',
    payload: todoId,
  });
  