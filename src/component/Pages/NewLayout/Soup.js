import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import classes from "./Soup.module.css";
import MealItem from "../../Meals/MealItem/MealItem";
import ShowMeals from "./ShowMeals";
import CartContext from "../../store/cart-context";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Lemon Coriander Soup",
    description: "",
    price: 155,
    veg: true,
    category: "CONTINENTAL SOUPS",
  },
  {
    id: "m2",
    name: "Minestrone Soup",
    description: "",
    price: 190,
    veg: false,
    category: "CONTINENTAL SOUPS",
  },
  {
    id: "m3",
    name: "Cream of French Onion Soup",
    description: "",
    price: 185,
    veg: false,
    category: "CONTINENTAL SOUPS",
  },
  {
    id: "m4",
    name: "Cream of Broccoli and Asparagus Soup",
    description: "",
    price: 215,
    veg: false,
    category: "CONTINENTAL SOUPS",
  },
  {
    id: "m5",
    name: "Veg. Clear Soup",
    description: "",
    price: 135,
    veg: true,
    category: "CHINESE SOUPS",
  },
  {
    id: "m6",
    name: "Veg. Noodles Soup",
    description: "",
    price: 135,
    veg: true,
    category: "CHINESE SOUPS",
  },
  {
    id: "m7",
    name: "Cream of Spinach",
    description: "",
    price: 160,
    veg: true,
    category: "CHINESE SOUPS",
  },
  {
    id: "m8",
    name: "Cream of Tomato Soup",
    description: "",
    price: 180,
    veg: false,
    category: "CHINESE SOUPS",
  },
  {
    id: "m9",
    name: "Veg. Sweet Corn Soup",
    description: "",
    price: 180,
    veg: true,
    category: "CHINESE SOUPS",
  },
  {
    id: "m10",
    name: "Hot and Sour Soup",
    description: "",
    price: 195,
    veg: false,
    category: "CHINESE SOUPS",
  },
];

function Soup(props) {
  const [filteredList, setFilteredList] = new useState([]);
  const cartCtx = useContext(CartContext);

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  let mealss;
  useEffect(() => {
    if (cartCtx.isVeg) {
      mealss = DUMMY_MEALS.filter((item) => item.veg === cartCtx.isVeg);
    } else {
      mealss = DUMMY_MEALS;
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

  if (cartCtx.isVeg) {
    mealss = DUMMY_MEALS.filter((item) => item.veg === cartCtx.isVeg);
  } else {
    mealss = DUMMY_MEALS;
  }

  let categoryCSoup = filteredList.filter(
    (meal) => meal.category === "CONTINENTAL SOUPS"
  );
  let categoryChSoup = filteredList.filter(
    (meal) => meal.category === "CHINESE SOUPS"
  );

  const mealsListCSoup = categoryCSoup.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      category={meal.category}
    />
  ));

  const mealsListChSoup = categoryChSoup.map((meal) => (
    <ShowMeals
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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
        <div className={classes.headline__big}>CONTINENTAL SOUPS</div>
        <ul>{mealsListCSoup}</ul>
        <ul>
          <div className={classes.headline__big}>CHINESE SOUPS</div>
          <li className={classes.mealitem}>
            <div className={classes.menu_card}>
              <div className={classes.details} style={{ width: "auto" }}>
                {mealsListChSoup}
              </div>
            </div>
          </li>
        </ul>
        <button
          className={classes.btn}
          style={{
            width: "100%",
            backgroundColor: "#000",
            color: "#fff",
          }}
          onClick={back}
        >
          Back
        </button>
      </Card>
    </section>
  );
}

export default Soup;
