function TodoHeader({ todos }) {
  const completedTodos = todos.filter((todo) => todo.completed).length;
  return (
    <div className="text-xl font-bold mb-4 flex justify-center items-center flex-col">
      <p>
        You have completed {completedTodos} out of {todos.length} todos
      </p>
      <p className="text-yellow-100">
        {todos.length === completedTodos && todos.length > 0
          ? " Congrats to you! 🎉"
          : ""}
      </p>
    </div>
  );
}

export default TodoHeader;
