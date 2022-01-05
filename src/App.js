import './App.scss';
import TodoList from './components/TodoList';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: " This is todo 1" },
    { id: 2, title: " This is todo 2" },
    { id: 3, title: " This is todo 3" },

  ])

  function handleTodoClick(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    console.log('new', newTodos)
    setTodos(newTodos);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodos = [...todos];
    const newTodo = { id: todos.length + 1, ...formValues }
    newTodos.push(newTodo)
    setTodos(newTodos);
  }

  return (
    <div className="app">
      {/* <ColorBox /> */}
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todos}
        onTodoClick={handleTodoClick}
      />
    </div>
  );
}

export default App;
