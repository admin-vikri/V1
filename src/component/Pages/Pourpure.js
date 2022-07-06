import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Meals from "../Meals/Meals";
import CartContext from "../store/cart-context";
import { pourpure, pourpure_categories } from "../../items/pourpure";
import MealItem from "../Meals/MealItem/MealItem";
import classes from "./Pourpure.module.css";
import Card from "../UI/Card/Card";

const Pourpure = () => {
  const [filteredList, setFilteredList] = new useState(pourpure_categories);
  const cartCtx = useContext(CartContext);
  let mealss;

  useEffect(() => {
    if (cartCtx.isVeg) {
      mealss = pourpure.filter((item) => item.veg === cartCtx.isVeg);
    } else {
      mealss = pourpure;
    }
    setFilteredList(mealss);
  }, [cartCtx.isVeg]);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...mealss];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item, i) => {
      // console.log(item);
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  //const categories = dwarka_categories;
  if (cartCtx.isVeg) {
    mealss = pourpure.filter((item) => item.veg === cartCtx.isVeg);
  } else {
    mealss = pourpure;
  }

  let categoryApp = filteredList
    .filter((meal) => meal.category === "Chotas")
    .map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        image={meal.image}
        imageV={meal.imageV}
        category={meal.category}
      />
    ));
  let categorySide = filteredList.filter((meal) => meal.category === "Bada");
  let categoryTand = filteredList.filter((meal) => meal.category === "Sides");
  let categoryBiry = filteredList.filter(
    (meal) => meal.category === "Sweet Dish"
  );
  const mealsListSide = categorySide.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
      category={meal.category}
    />
  ));
  const mealsListTand = categoryTand.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
      category={meal.category}
    />
  ));
  const mealsListBiry = categoryBiry.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
      category={meal.category}
    />
  ));

  return (
    <section className={classes.meals}>
      <div className="search-header" style={{ textAlign: "center" }}>
        <input
          className={classes.searchbar}
          placeholder="Search your favourite..."
          onChange={filterBySearch}
        />
      </div>
      <Card>
        <div className={classes.headline__big}>Chotas</div>
        <ul>{categoryApp}</ul>
        <div className={classes.headline__big}>Bada</div>
        <ul>{mealsListSide}</ul>
        <div className={classes.headline__big}>Sides</div>
        <ul>{mealsListTand}</ul>
        <div className={classes.headline__big}>Sweet Dish</div>
        <ul>{mealsListBiry}</ul>
      </Card>
    </section>
  );
};

export default Pourpure;
