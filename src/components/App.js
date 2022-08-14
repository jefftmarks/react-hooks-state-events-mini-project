import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDelete(deleteTask) {
    setTasks(tasks.filter(task => {
      return task.text !== deleteTask.text;
    }))
  }

  function handleSelectCategory(category) {
    setCategory(category);
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  const filteredTasks = tasks.filter(task => {
    if (category === "All") {
      return task;
    } else {
      return task.category === category;
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleSelectCategory={handleSelectCategory}
        selectedCategory={category}
      />
      <NewTaskForm categories={CATEGORIES} handleAddTask={handleAddTask}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
