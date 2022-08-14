import React, { useState } from "react";

function NewTaskForm({categories, handleAddTask}) {
  const [formData, setFormData] = useState ({
    text: "",
    category: "",
  })

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    handleAddTask(formData);
  }

  return (
    <form
      className="new-task-form"
      onSubmit={handleOnSubmit}
    >
      <label>
        Details
        <input
          onChange={handleOnChange}
          type="text"
          name="text"
          value={formData.text}
        />
      </label>
      <label>
        Category
        <select
          onChange={handleOnChange}
          name="category"
          value={formData.category}
        >
          {categories.map(category => (
            category !== "All" ? <option key={category}>{category}</option> : null
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
