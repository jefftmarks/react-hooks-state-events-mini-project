import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleSubmit = (event) => {
    event.preventDefault();
    setText("");
    setCategory("Code");
    onTaskFormSubmit({text: text, category: category})
  }

  return (
    <form
      className="new-task-form"
      onSubmit={handleSubmit}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
