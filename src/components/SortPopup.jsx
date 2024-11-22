import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

const SortPopup = React.memo(({ items, onClickSortType, activeSortType }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  const activeLabel =
    items.find(
      (obj) =>
        obj.type === activeSortType.type && obj.order === activeSortType.order
    )?.name || "popular";

  const onSelectItem = (sortOption) => {
    onClickSortType(sortOption);
    setVisiblePopup(false);
  };

  const toggleVisiblePopup = (event) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      setVisiblePopup(!visiblePopup);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setVisiblePopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          <svg
            className={visiblePopup ? "rotated" : ""}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Sort by:</b>
          <span
            onClick={toggleVisiblePopup}
            onKeyDown={toggleVisiblePopup}
            tabIndex={0}
            role="button"
          >
            {activeLabel}
          </span>
        </div>
        {visiblePopup && (
          <div className="sort__popup">
            <ul>
              {items &&
                items.map((obj, index) => (
                  <li
                    className={
                      activeSortType.type === obj.type &&
                      activeSortType.order === obj.order
                        ? "active"
                        : ""
                    }
                    key={index}
                    onClick={() => onSelectItem(obj)}
                  >
                    {obj.name}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
});

SortPopup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      order: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickSortType: PropTypes.func.isRequired,
  activeSortType: PropTypes.shape({
    type: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  }).isRequired,
};

export default SortPopup;
