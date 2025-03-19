function TodoList({ todos, handleDeleteTodo, handleToggleComplete }) {
  return (
    <div className="border-2 w-[375px] border-amber-600 rounded-lg  flex flex-col items-center justify-start h-screen">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="  w-[350px] flex justify-start gap-4 items-center border-b-2 p-2 border-amber-600"
        >
          <input
            type="checkbox"
            key={todo.id}
            onChange={() => handleToggleComplete(todo.id)}
            checked={todo.completed}
            className="h-5 w-5"
          />
          <p
            onClick={() => handleToggleComplete(todo.id)}
            className={`${todo.completed ? "line-through" : ""}`}
          >
            {todo.text}
          </p>
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className="border-2 ml-auto rounded-xl p-2 bg-red-500 text-white"
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default TodoList;
