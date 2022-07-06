/** @format */

import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import classes from "./Lasagne.module.css";
import MealItem from "../../Meals/MealItem/MealItem";
import ShowMeals from "./ShowMeals";
import CartContext from "../../store/cart-context";

const DUMMY_MEALS = [
  {
    id: "m117",
    name: "Saucy Garlic",
    description: "",
    price: 445,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m118",
    name: "Veggie Pepper",
    description: "",
    price: 455,
    image:
      "https://im.whatshot.in/img/2019/Jan/best-sizzlers-in-mumbai-whats-hot-mumbai-1548746174.jpg",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m119",
    name: "Smashy Potatoes",
    description: "",
    price: 475,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m120",
    name: "Veg. Satellite",
    description: "Garden fresh veggies with mushroom, Fresh cream & Cheese",
    price: 495,
    image: "",
    veg: true,
    category: "Sizzlers",
  },
  {
    id: "m121",
    name: "Veg. Sizzler with Baked Beans, Noodles & Garlic Sauce",
    description: "",
    price: 485,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m122",
    name: "Hearts on Fire",
    description: "",
    price: 495,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m123",
    name: "Jain Special Sizzlers",
    description: "",
    price: 485,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m124",
    name: "Veg. Spaghetti & Cheese Sauce",
    description: "",
    price: 385,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m125",
    name: "Paneer Shaslik",
    description: "",
    price: 495,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m126",
    name: "Exotic Veg. Sizzler",
    description:
      "Veggies such as Broccoli, Red cabbage, Bell peppers, Babycorn etc.",
    price: 530,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m127",
    name: "Paneer Shaslik",
    description: "",
    price: 495,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m128",
    name: "Veg. Sizzler in B.B.Q. Paneer",
    description: "",
    price: 525,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m129",
    name: "Veg. Sizzler in B.B.Q. Paneer",
    description:
      "Diced veggies with cubes of Cottage cheese, Zucchini, Babycorn, Fries etc.",
    price: 525,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m130",
    name: "Veg Sizzler with Beans Sprout",
    description: "",
    price: 515,
    image: "",
    veg: true,
    category: "Sizzlers",
  },

  {
    id: "m131",
    name: "Red Indian Special Sizzlers",
    description:
      "Garden fresh veggies with Mushroom, Babycorn, Paneer & Cheese",
    price: 545,
    image: "",
    veg: true,
    category: "Sizzlers",
  },
  {
    id: "m132",
    name: "Extra Cutlet Veg / Panner / Jain",
    description: "",
    price: 90,
    image: "",
    veg: true,
    category: "Sizzlers",
  },
  {
    id: "m133",
    name: "Extra Smashy Potatoes",
    description: "",
    price: 515,
    image: "",
    veg: true,
    category: "Sizzlers",
  },
];

function Sizzlers(props) {
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

  let Sizzlers = filteredList.filter((meal) => meal.category === "Sizzlers");
  // let categoryChSoup = filteredList.filter(
  //   (meal) => meal.category === 'CHINESE SOUPS'
  // );

  const mealsList = Sizzlers.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      category={meal.category}
    />
  ));

  // const mealsListChSoup = categoryChSoup.map((meal) => (
  //   <ShowMeals
  //     key={meal.id}
  //     id={meal.id}
  //     name={meal.name}
  //     description={meal.description}
  //     price={meal.price}
  //     category={meal.category}
  //   />
  // ));

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
        <div className={classes.headline__big}>Sizzlers</div>
        <ul>{mealsList}</ul>
        <ul>
          {/* <div className={classes.headline__big}>CHINESE SOUPS</div> */}
          <li className={classes.mealitem}>
            <div className={classes.menu_card}>
              <div className={classes.details} style={{ width: "auto" }}>
                {/* {mealsListChSoup} */}
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

export default Sizzlers;
