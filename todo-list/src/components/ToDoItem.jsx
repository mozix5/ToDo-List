import React, { useState } from "react";


const ToDoItem = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((prevItem) => {
      return !prevItem;
    });
  };
  return (
    <div>
      <li
        onClick={handleClick}
        style={
          click
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {props.value}
      </li>
    </div>
  );
};

export default ToDoItem;

