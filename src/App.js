import React from "react";

import AddTodo from "./components/AddTodo";
import List from "./components/List";

function App() {
  return (
    <div className="box text-center font-mono my-0 mx-0">
      <div className="bg-gray-300 py-2">
        <h1 className="text-bold mr-16 my-4">Hello ToDo</h1>
        <AddTodo />
      </div>
      <List />
    </div>
  );
}

export default App;
