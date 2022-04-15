import React, { useState } from "react";
import "./App.css";
import AddToInput from "./components/AddToInput";
import Display from "./components/Display";

function App() {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <AddToInput todoList={todoList} setTodoList={setTodoList} />
      <Display todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
