import { useState } from "react";

function TodoFilter({ handleFilter, handleDeleteAll }) {
  const [activeFilter, setActiveFilter] = useState("all");

  function handleActiveFilter(filter) {
    setActiveFilter(filter);
    handleFilter(filter);
  }
  return (
    <div className="flex  justify-items-start w-[385px] ">
      <button
        className={`border-2 p-2 m-2 cursor-pointer   border-amber-600  rounded-xl ${
          activeFilter === "all" ? "bg-blue-200" : ""
        }`}
        onClick={() => handleActiveFilter("all")}
      >
        All
      </button>
      <button
        className={`border-2 p-2 m-2 cursor-pointer   border-amber-600  rounded-xl ${
          activeFilter === "pending" ? "bg-slate-300" : ""
        }`}
        onClick={() => handleActiveFilter("pending")}
      >
        Pending
      </button>
      <button
        className={`border-2 p-2 m-2 cursor-pointer  border-amber-600  rounded-xl ${
          activeFilter === "completed" ? "bg-green-300" : ""
        }`}
        onClick={() => handleActiveFilter("completed")}
      >
        Completed
      </button>
      <button
        className="border-2 p-2 m-2 ml-auto  border-amber-600 cursor-pointer rounded-xl bg-red-500 text-white"
        onClick={() => handleDeleteAll()}
      >
        Clear all
      </button>
    </div>
  );
}

export default TodoFilter;
