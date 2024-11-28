import { useState } from "react";
import "./App.css";
import InputContainer from "./components/Input_Container"; // Corrected file
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
    // console.log(e.target.value)
  }


  function addTodo() {
    if (inputVal !='') {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal('');
    };
  }

  function delTodo(todoindex){
    setTodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodoIndex)=>{
      return prevTodoIndex != todoindex;
    }))
  }
console.log(todos)
  return (
    <main>
      <h1>TODO LIST</h1>
      <h3>Don't Juge it is working demo only (In-progress)</h3>
      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todos={todos} delTodo={delTodo}/>
    </main>
  );
}

export default App;
