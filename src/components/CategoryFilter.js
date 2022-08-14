import React from "react";

function CategoryFilter({categories, handleSelectCategory, selectedCategory}) {
  function onClickCategory(category) {
    handleSelectCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onClickCategory(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
