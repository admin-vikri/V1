import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CartContext from "../store/cart-context";
import AvailableMeals from "../Meals/AvailableMeals";
import { redindies, redindies_categories } from "../../items/redindies";
import MealItem from "../Meals/MealItem/MealItem";

const Redindies = () => {
  const cartCtx = useContext(CartContext);
  const [filteredList, setFilteredList] = new useState(redindies_categories);
  let mealss;

  const sampleLocation = useLocation();
  let url = sampleLocation.pathname;

  useEffect(() => {
    if (cartCtx.isVeg === "veg") {
      mealss = redindies.filter((item) => item.veg === cartCtx.isVeg);
    } else if (cartCtx.isVeg === "nonveg") {
      mealss = redindies.filter((item) => item.veg === cartCtx.isVeg);
    } else {
      mealss = redindies;
    }
    setFilteredList(mealss);
  }, [cartCtx.isVeg]);

  const categories = redindies_categories;
  if (cartCtx.isVeg === "veg") {
    mealss = redindies.filter((item) => item.veg === cartCtx.isVeg);
  } else if (cartCtx.isVeg === "nonveg") {
    mealss = redindies.filter((item) => item.veg === cartCtx.isVeg);
  } else {
    mealss = redindies;
  }

  const getValue = (input) => {
    setFilteredList(input);
  };

  let categoryCSoup = filteredList.filter(
    (meal) => meal.category === "Continental Soups" //lemon
  );
  let categoryTSoup = filteredList.filter(
    (meal) => meal.category === "Thai Soups" // No
  );
  let categoryChSoup = filteredList.filter(
    (meal) => meal.category === "Chinese Soups"
  );
  let categoryChStarters = filteredList.filter(
    (meal) => meal.category === "Chinese Starters"
  );
  let categoryMStarters = filteredList.filter(
    (meal) => meal.category === "Mexican Starters"
  );
  let categoryBsw = filteredList.filter(
    (meal) => meal.category === "Baltic Side Walks"
  );
  let categorySalad = filteredList.filter(
    (meal) => meal.category === "Insalata (Salad)"
  );
  let categoryMd = filteredList.filter(
    (meal) => meal.category === "Mexican Delights"
  );
  let categoryEn = filteredList.filter(
    (meal) => meal.category === "Enchiladas"
  );
  let categoryBhp = filteredList.filter(
    (meal) => meal.category === "Baked Hot Potatoes"
  );
  let categoryPizza = filteredList.filter((meal) => meal.category === "Pizza");
  let categoryPizzaT = filteredList.filter(
    (meal) => meal.category === "Pizza Toppings"
  );
  let categorySiz = filteredList.filter((meal) => meal.category === "Sizzlers");
  let categoryId = filteredList.filter(
    (meal) => meal.category === "Italian Delights"
  );
  let categoryLasagne = filteredList.filter(
    (meal) => meal.category === "Lasagne"
  );
  let categoryPasta = filteredList.filter((meal) => meal.category === "Pasta");
  let categoryChMain = filteredList.filter(
    (meal) => meal.category === "Chinese Main Course"
  );
  let categoryRice = filteredList.filter(
    (meal) => meal.category === "Rice & Noodles"
  );
  let categoryChsp = filteredList.filter(
    (meal) => meal.category === "Chop Suey"
  );
  let categoryDesserts = filteredList.filter(
    (meal) => meal.category === "Desserts"
  );
  let categoryMocktails = filteredList.filter(
    (meal) => meal.category === "Mocktails"
  );
  let categoryMilkS = filteredList.filter(
    (meal) => meal.category === "Milk Shakes"
  );

  const mealsListCSoup = categoryCSoup.map((meal) => (
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
  const mealsListTSoup = categoryTSoup.map((meal) => (
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
  const mealsListChSoup = categoryChSoup.map((meal) => (
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
  const mealsListChStarters = categoryChStarters.map((meal) => (
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
  const mealsListMStarters = categoryMStarters.map((meal) => (
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
  const mealsListBsw = categoryBsw.map((meal) => (
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
  const mealsListSalad = categorySalad.map((meal) => (
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
  const mealsListMd = categoryMd.map((meal) => (
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
  const mealsListEn = categoryEn.map((meal) => (
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
  const mealsListBhp = categoryBhp.map((meal) => (
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
  const mealsListPizza = categoryPizza.map((meal) => (
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
  const mealsListPizzaT = categoryPizzaT.map((meal) => (
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
  const mealsListSiz = categorySiz.map((meal) => (
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
  const mealsListId = categoryId.map((meal) => (
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
  const mealsListLasagne = categoryLasagne.map((meal) => (
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
  const mealsListPasta = categoryPasta.map((meal) => (
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
  const mealsListChMain = categoryChMain.map((meal) => (
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
  const mealsListRice = categoryRice.map((meal) => (
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
  const mealsListChsp = categoryChsp.map((meal) => (
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
  const mealsListDesserts = categoryDesserts.map((meal) => (
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
  const mealsListMocktails = categoryMocktails.map((meal) => (
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
  const mealsListMilkS = categoryMilkS.map((meal) => (
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

  const allcat = [
    mealsListCSoup,
    mealsListTSoup,
    mealsListChSoup,
    mealsListChStarters,
    mealsListMStarters,
    mealsListBsw,
    mealsListSalad,
    mealsListMd,
    mealsListEn,
    mealsListBhp,
    mealsListPizza,
    mealsListPizzaT,
    mealsListSiz,
    mealsListId,
    mealsListLasagne,
    mealsListPasta,
    mealsListChMain,
    mealsListRice,
    mealsListChsp,
    mealsListDesserts,
    mealsListMocktails,
    mealsListMilkS,
  ];
  console.log(mealsListMilkS);

  return (
    <main>
      <AvailableMeals
        allcat={allcat}
        mealss={mealss}
        getFilteredValue={getValue}
        filteredItems={categories}
        mealsListCSoup={mealsListCSoup}
        mealsListTSoup={mealsListTSoup}
        mealsListChSoup={mealsListChSoup}
        mealsListChStarters={mealsListChStarters}
        mealsListMStarters={mealsListMStarters}
        mealsListBsw={mealsListBsw}
        mealsListSalad={mealsListSalad}
        mealsListMd={mealsListMd}
        mealsListEn={mealsListEn}
        mealsListBhp={mealsListBhp}
        mealsListPizza={mealsListPizza}
        mealsListPizzaT={mealsListPizzaT}
        mealsListSiz={mealsListSiz}
        mealsListId={mealsListId}
        mealsListLasagne={mealsListLasagne}
        mealsListPasta={mealsListPasta}
        mealsListChMain={mealsListChMain}
        mealsListRice={mealsListRice}
        mealsListChsp={mealsListChsp}
        mealsListDesserts={mealsListDesserts}
        mealsListMocktails={mealsListMocktails}
        mealsListMilkS={mealsListMilkS}
      />
    </main>
  );
};

export default Redindies;
