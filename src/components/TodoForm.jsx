import { useState } from "react";

function TodoForm({ handleAddTodo }) {
  const [input, setInput] = useState("");

  return (
    <form
      className="flex justify-center items-center w-full p-3"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(input);
        setInput("");
      }}
    >
      <input
        type="text"
        className="w-full  border-2 border-amber-600   p-3 rounded-lg"
        placeholder="What do you need to do..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
