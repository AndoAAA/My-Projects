import React, { useCallback } from "react";
import SortPopup from "../components/SortPopup";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";

const categoriNames = ["Meat", "Vegetarian", "Grill", "Spicy", "Closed"];
const sortItems = [
  { name: "popular", type: "popular" },
  { name: "price", type: "price" },
  { name: "alphabet", type: "alphabet" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const onSelectSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories items={categoriNames} onClickItem={onSelectCategory} />
          <SortPopup onClickItem={onSelectSortType} items={sortItems} />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">
          {items?.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
