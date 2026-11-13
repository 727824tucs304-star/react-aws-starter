import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("Loading tasks...");

  async function loadTasks() {
    try {
      const response = await fetch("/api/tasks");
      if (!response.ok) throw new Error("Could not load tasks");
      const data = await response.json();
      setTasks(data);
      setMessage("");
    } catch {
      setMessage("Cannot connect to the backend. Please check the server.");
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTask(event) {
    event.preventDefault();
    if (!text.trim()) return;

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Could not add task");

      setTasks((current) => [...current, data]);
      setText("");
      setMessage("");
    } catch {
      setMessage("Task could not be added. Check the backend.");
    }
  }

  return (
    <main className="page">
      <section className="card">
        
        <h1>My Task List</h1>
        <p className="intro">
          Add Task Application .
        
        </p>

        <form onSubmit={addTask}>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter a task"
            aria-label="Enter a task"
          />
          <button type="submit">Add task</button>
        </form>

        {message && <p className="message">{message}</p>}

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>

        <p className="note">Demo project hosted with AWS EC2</p>
      </section>
    </main>
  );
}
