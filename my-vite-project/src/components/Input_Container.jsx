import React from 'react';

function Input_Container({inputVal ,writeTodo,addTodo})  {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={writeTodo} />
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default Input_Container;