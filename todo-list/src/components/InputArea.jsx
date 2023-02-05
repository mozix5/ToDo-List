import React, { useState } from "react";

export const InputArea = (props) => {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handleKey(event) {
    // console.log(event.key);
    event.key === "Enter" && handleClick();
  }
  function handleClick() {
    props.onAdd(inputText);
    setInputText("");
  }
  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        onKeyDown={handleKey}
      />
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
};
