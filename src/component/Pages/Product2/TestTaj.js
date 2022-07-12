import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import { testTaj, testTaj_categories } from "../../../items/TestTajData";
import MealItem from "../../Meals/MealItem/MealItem";
import Card from "../../UI/Card/Card";
import classes from "./p2.module.css";

const TestTaj = () => {
  const [list, setList] = useState();
  const [filteredList, setFilteredList] = new useState(testTaj_categories);
  const cartCtx = useContext(CartContext);
  let mealss;

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    getApiData();
    if (cartCtx.isVeg === "veg") {
      mealss = testTaj.filter((item) => item.veg === cartCtx.isVeg);
    } else if (cartCtx.isVeg === "nonveg") {
      mealss = testTaj.filter((item) => item.veg === cartCtx.isVeg);
    } else {
      mealss = testTaj;
    }
    console.log(list);
    setFilteredList(mealss);
  }, [cartCtx.isVeg]);

  const getApiData = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/admin-vikri/api/redindies"
    ).then((response) => response.json());
    console.log(response);
    setList(response);
  };

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
  const categories = testTaj_categories;

  if (cartCtx.isVeg === "veg") {
    mealss = testTaj.filter((item) => item.veg === cartCtx.isVeg);
  } else if (cartCtx.isVeg === "nonveg") {
    mealss = testTaj.filter((item) => item.veg === cartCtx.isVeg);
  } else {
    mealss = testTaj;
  }

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
        <div className={classes.headline__big}>{categories[0]}</div>
        <ul>{mealsListCSoup}</ul>
        <div className={classes.headline__big}>{categories[1]}</div>
        <ul>{mealsListTSoup}</ul>
        <div className={classes.headline__big}>{categories[2]}</div>
        <ul>{mealsListChSoup}</ul>
        <div className={classes.headline__big}>{categories[3]}</div>
        <ul>{mealsListChStarters}</ul>
        <a
          style={{ textAlign: "center" }}
          href="https://menu-venture.github.io/Vikri/"
        >
          <h4>
            Powered by{" "}
            <span style={{ fontSize: "18px", fontStyle: "italic" }}>
              Vikri.in
            </span>
          </h4>
        </a>
      </Card>
    </section>
  );
};

export default TestTaj;
