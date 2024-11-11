import React, { useState } from "react";

const Categories = ({ items, onClick }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
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
            items.map((item, index) => (
              <li
                className={activeItem === index ? "active" : ""}
                key={index}
                onClick={() => onSelectItem(index)}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
