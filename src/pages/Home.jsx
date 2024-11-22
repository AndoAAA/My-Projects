import React, { useCallback } from "react";
import SortPopup from "../components/SortPopup";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import LoadingBlock from "../components/LoadingBlock";
import PropTypes from "prop-types";

const categoriNames = ["Meat", "Vegetarian", "Grill", "Spicy", "Closed"];
const sortItems = [
  { name: "popular", type: "popular", order: "desc" },
  { name: "price", type: "price", order: "desc" },
  { name: "alphabet", type: "name", order: "asc" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const onSelectSortType = useCallback(
    (sortOption) => {
      dispatch(setSortBy(sortOption));
    },
    [dispatch]
  );

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            items={categoriNames}
            onClickCategory={onSelectCategory}
          />
          <SortPopup
            activeSortType={sortBy}
            onClickSortType={onSelectSortType}
            items={sortItems}
          />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">
          {isLoaded && items
            ? items.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} isLoading={true} />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.number,
      rating: PropTypes.number,
      types: PropTypes.arrayOf(PropTypes.number),
      sizes: PropTypes.arrayOf(PropTypes.number),
    })
  ),
  category: PropTypes.number,
  onSelectCategory: PropTypes.func,
  onSelectSortType: PropTypes.func,
};

export default Home;
