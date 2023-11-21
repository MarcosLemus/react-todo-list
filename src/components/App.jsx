import { useState } from "react";
// import Todo from "./todo";

function App() {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      setTasks([...tasks, query.trim()]);
      setQuery("");
    }
  };

  return (
    <div className="App">
      <h1>React to-do list</h1>
      <input
        value={query}
        type="text"
        placeholder="TODO"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {/* <Todo /> */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
