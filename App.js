import React, { useState, useRef } from 'react';
import './App.css'; // Make sure to create an App.css file for styling

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: Date.now(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div className="header">
    <h1 className="header-text">ToDo List</h1>
     </div>
    <div className="todo-container">
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.id % 2 === 0 ? 'todo-even' : 'todo-odd'}>
            {todo.name}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul> 
      
    </div>
    </div>
  );
}

export default App;