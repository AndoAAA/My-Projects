import React, { useState } from "react";

const Categories = React.memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };
  return (
    <>
      <div className="categories">
        <ul>
          <li
            className={activeItem === null ? "active" : ""}
            onClick={() => onSelectItem(null)}
          >
            All
          </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeItem === index ? "active" : ""}
                key={index}
                onClick={() => onSelectItem(index)}
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
