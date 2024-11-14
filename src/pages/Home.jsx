import React from "react";
import SortPopup from "../components/SortPopup";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";

const Home = ({ items }) => {
  
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            items={["Meat", "Vegetarian", "Grill", "Spicy", "Closed"]}
            onClick={() => console.log("hello")}
          />
          <SortPopup items={["popularity", "price", "alphabet"]} />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">
          {Array.isArray(items)
            ? items.map((obj, index) => <PizzaBlock key={index} {...obj} />)
            : null}
        </div>
      </div>
    </>
  );
};

export default Home;
