import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  const [newText, setNewText] = useState("");
  const [newCategory, setNewCategory] = useState("Code");

  const filteredTasks = tasks.filter(task => {
    return category === "All" || task.category === category;
  })

  const handleDeleteTask = (text) => {
    const newTasks = tasks.filter(task => {
      return task.text !== text;
    })
    setTasks(newTasks);
  }

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(category => category !== "All")}
        onChangeText={setNewText}
        text={newText}
        onChangeCategory={setNewCategory}
        category={newCategory}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
