import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoHeader from './components/TodoHeader';

const MAX_TODOS = 10;

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  function handleAddTodo(todo) {
    if (todos.length >= MAX_TODOS) {
      alert('You have reached the maximum number of todos');
      return;
    }
    if (todo === '') return;
    setTodos([
      ...todos,
      { text: todo, completed: false, id: todos.length + 1 },
    ]);
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleToggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleFilter(filter) {
    setFilter(filter);
  }

  function handleDeleteAll() {
    setTodos([]);
    setFilter('all');
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="  flex justify-center items-center h-screen flex-col">
      <TodoHeader todos={todos} />
      <main className="flex flex-col items-center align-center  w-[400px] h-[600px] mx-auto pb-3 no-scrollbar overflow-y-auto ">
        <TodoForm handleAddTodo={handleAddTodo} />
        <h1 className="text-3xl font-bold mb-2">Todo List</h1>
        {todos.length > 0 ? (
          <TodoFilter
            handleFilter={handleFilter}
            handleDeleteAll={handleDeleteAll}
          />
        ) : (
          ''
        )}
        <TodoList
          todos={filteredTodos}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleComplete={handleToggleComplete}
        />
      </main>
    </div>
  );
}

export default App;
