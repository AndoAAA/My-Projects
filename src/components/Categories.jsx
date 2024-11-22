import React from "react";

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {
  return (
    <>
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? "active" : ""}
            onClick={() => onClickCategory(null)}
          >
            All
          </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeCategory === index ? "active" : ""}
                key={index}
                onClick={() => onClickCategory(index)}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
});

export default Categories;
