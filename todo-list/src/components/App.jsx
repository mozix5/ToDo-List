import React, { useState } from "react";
import { InputArea } from "./InputArea";
import ToDoItem from "./ToDoItem";

const App = () => {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((pervItems) => {
      return [...pervItems, inputText];
    });
  }
  function clearAll() {
    setItems([]);
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addItem} />
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem value={todoItem} key={index} id={index} />
            ))}
          </ul>
        </div>
        <div>
          <button onClick={clearAll}>
            <span>Clear all</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
