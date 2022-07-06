import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CartContext from "../store/cart-context";
import AvailableMeals from "../Meals/AvailableMeals";
import { dwarka, dwarka_categories } from "../../items/dwarka";
import MealItem from "../Meals/MealItem/MealItem";

const Dwarka = () => {
  const cartCtx = useContext(CartContext);
  const [filteredList, setFilteredList] = new useState(dwarka_categories);

  const sampleLocation = useLocation();
  let url = sampleLocation.pathname;

  let mealss;
  let categories;
  useEffect(() => {
    if (cartCtx.isVeg === "veg") {
      mealss = dwarka.filter((item) => item.veg === cartCtx.isVeg);
    } else if (cartCtx.isVeg === "nonveg") {
      mealss = dwarka.filter((item) => item.veg === cartCtx.isVeg);
    } else {
      mealss = dwarka;
    }
    setFilteredList(mealss);
  }, [cartCtx.isVeg]);

  categories = dwarka_categories;
  if (cartCtx.isVeg === "veg") {
    mealss = dwarka.filter((item) => item.veg === cartCtx.isVeg);
  } else if (cartCtx.isVeg === "nonveg") {
    mealss = dwarka.filter((item) => item.veg === cartCtx.isVeg);
  } else {
    mealss = dwarka;
  }

  const getValue = (input) => {
    setFilteredList(input);
  };

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
      imageV={meal.imageV}
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
      imageV={meal.imageV}
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
      imageV={meal.imageV}
      category={meal.category}
    />
  ));
  return (
    <main>
      <AvailableMeals
        mealss={mealss}
        getFilteredValue={getValue}
        filteredItems={categories}
        categoryApp={categoryApp}
        mealsListSide={mealsListSide}
        mealsListTand={mealsListTand}
        mealsListBiry={mealsListBiry}
      />
    </main>
  );
};

export default Dwarka;
