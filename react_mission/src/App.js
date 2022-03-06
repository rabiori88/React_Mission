import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

export default function App() {
  const LIST_KEY = "TODO_LIST";
  const loadData = localStorage.getItem(LIST_KEY)
    ? JSON.parse(localStorage.getItem(LIST_KEY))
    : [];
  const [todoData, setTodoData] = useState(loadData);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    const test = [...todoData, newTodo];
    setTodoData(test);

    console.log(test);
    //setTodoData((prev) => [...prev, newTodo]);

    localStorage.setItem(LIST_KEY, JSON.stringify(test));

    setValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h3> 할일 목록</h3>
        </div>

        <Lists todoData={todoData} setTodoData={setTodoData}></Lists>

        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

// export default App;
