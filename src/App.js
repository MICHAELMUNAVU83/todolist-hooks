import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";

function App() {
  const [todos, SetTodos] = useState([]);
  const [input, setInput] = useState("");
  const Handleinput = function (e) {
    e.preventDefault();
    setInput(e.target.value);
  };
  const Handlesubmit = (e) => {
    e.preventDefault();
    SetTodos([
      ...todos,
      {
        task: input,
        id: Date.now(),
      },
    ]);
    setInput("");
  };
  const Deletetask = (id) => {
    SetTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      })
    ])
 
  
  };

  return (
    <div className="App">
      <Header />
      <TodoInput
        Handlesubmit={Handlesubmit}
        Handleinput={Handleinput}
        input={input}
        setInput={setInput}
      />
      <Todolist Deletetask={Deletetask} todos={todos} SetTodos={SetTodos} />
    </div>
  );
}

export default App;
