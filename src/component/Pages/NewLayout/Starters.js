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
    id: "m17",
    name: "Chinese Bhel",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 195,
    image:
      "https://images.unsplash.com/photo-1641642399335-6867075ee7db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmhlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m18",
    name: "Crispy Spring Roll",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 215,
    image:
      "https://images.unsplash.com/photo-1577859584099-38d38a4aacb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3Jpc3B5JTIwc3ByaW5nJTIwcm9sbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m19",
    name: "Veg Manchurian Dry",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 215,
    image: "",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m20",
    name: "Mushroom Schezwan Dry",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 255,
    image: "",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m21",
    name: "Schezwan Fingers",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 255,
    image: "",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m22",
    name: "Oriental Finger Roll",
    description: "Exotic Veggies wrapped in finger shaped rolls",
    price: 265,
    image: "",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m23",
    name: "Paneer in Salt & Pepper",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 310,
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m24",
    name: "Crispy Veg in Salt & Pepper",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 245,
    image: "",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m25",
    name: "Paneer Chilly Dry",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 295,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m26",
    name: "Crispy Vegetables",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 285,
    image:
      "https://images.unsplash.com/photo-1654458804670-2f4f26ab3154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaXNweSUyMHZlZ2V0YWJsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m27",
    name: "Malaysian Cottage Cheese",
    description:
      "Chunks of Paneer sauteed with bell peppers & crushed peanuts in Red Sauce",
    price: 330,
    image: "",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m28",
    name: "Stir Fried Vegetables",
    description: "Exotic Diced veggies tossed in olive oil & herbs",
    price: 315,
    image:
      "https://images.unsplash.com/photo-1641919062245-98117fd30791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZyaWVkJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m29",
    name: "Red Indian Chef's Special",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 325,
    image: "",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m30",
    name: "Crispy Veg in Honey Ginger Sauce",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 295,
    image: "",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m31",
    name: "Crispy Paneer in Honey Ginger Sauce",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 315,
    image:
      "https://images.unsplash.com/photo-1627662235824-d9f447830c76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y3Jpc3B5JTIwcGFuZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m32",
    name: "Veg Balls In Black Bean Dry",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 245,
    image: "",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m33",
    name: "Veg Balls In Schezwan Dry",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 235,
    image: "",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m34",
    name: "Paneer In Black Bean Dry",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 325,
    image:
      "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFuZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m35",
    name: "Paneer In Schezwan Dry",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 310,
    image:
      "https://images.unsplash.com/photo-1551881192-002e02ad3d87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFuZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m36",
    name: "French Fries In Schezwan Sauce",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 255,
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Chinese Starters",
  },
  {
    id: "m37",
    name: "Tortilla Chips with Salsa Sauce",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 205,
    image:
      "https://images.unsplash.com/photo-1564758565426-1a503a83f5c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG9ydGlsbGElMjBjaGlwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m38",
    name: "Onion Rings",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 185,
    image:
      "https://images.unsplash.com/photo-1625938146369-adc83368bda7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8T25pb24lMjBSaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m39",
    name: "Capsicum Rings",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 195,
    image: "",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m40",
    name: "Cajun Potatoes",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 245,
    image:
      "https://images.unsplash.com/photo-1548869205-3b74ad80e605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FqdW4lMjBwb3RhdG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m41",
    name: "Baby Corn Fingers",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 235,
    image:
      "https://images.unsplash.com/photo-1632992468854-7b1d83134bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNvcm58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m42",
    name: "Veg. Cheese Quesadilla",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 285,
    image:
      "https://images.unsplash.com/photo-1628838233717-be047a0b54fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwcXVlc2FkaWxsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m43",
    name: "Mushroom Cheese Quesadilla",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 285,
    image:
      "https://images.unsplash.com/photo-1647545401800-bd8f77e670ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlJTIwcXVlc2FkaWxsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m44",
    name: "Golden Corn Cheese Balls",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 275,
    image: "",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m45",
    name: "Mexican Beans Tacos",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 255,
    image:
      "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m46",
    name: "Assorted Vegetables Tacos",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 295,
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFjb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m47",
    name: "Nachos with Cheese Sauce",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 295,
    image:
      "https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFjaG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m48",
    name: "Nachos with Am Corn & Cheese Sauce",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 305,
    image:
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFjaG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m49",
    name: "Nachos with Refried Beans & Cheese Sauce",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 315,
    image:
      "https://images.unsplash.com/photo-1619604107557-b5321217aee7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmFjaG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m50",
    name: "Mexican Platter (Regular)",
    description:
      "A Combination of Nachos, Cheese Corn Balls, Baby Corn Fingers, Onion & Capsicum rings",
    price: 325,
    image:
      "https://images.unsplash.com/photo-1651994410607-bf6810a0bb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWV4aWNhbiUyMHBsYXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m51",
    name: "Mexican Platter (Large)",
    description:
      "A Combination of Nachos, Cheese Corn Balls, Baby Corn Fingers, Onion & Capsicum rings",
    price: 495,
    image: "",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m52",
    name: "Extra Cheese Sauce",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 80,
    image: "",
    veg: true,
    category: "Mexican Starters",
  },
  {
    id: "m53",
    name: "Extra Beans / Am. Corn",
    description: "Sattu papdi, tomato oil, pickled chillies",
    price: 60,
    image: "",
    veg: true,
    category: "Mexican Starters",
  },
];

function Starters(props) {
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

  let MexicanStarters = filteredList.filter(
    (meal) => meal.category === "Mexican Starters"
  );
  let ChineseStarters = filteredList.filter(
    (meal) => meal.category === "Chinese Starters"
  );

  const MexicanStartersItem = MexicanStarters.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      category={meal.category}
    />
  ));

  const ChineseStartersItem = ChineseStarters.map((meal) => (
    <MealItem
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
        <div className={classes.headline__big}> Starters</div>
        <ul>{MexicanStartersItem} </ul>

        <div className={classes.headline__big}>Chinese Starters</div>
        <ul>{ChineseStartersItem} </ul>
        {/* <li className={classes.mealitem}>
            <div className={classes.menu_card}>
              <div className={classes.details} style={{ width: 'auto' }}>
                {ChineseStartersItem}
              </div>
            </div>
          </li> */}

        {/* <ul>
          <div className={classes.headline__big}>CONTINENTAL SOUPS</div>
          <li className={classes.mealitem}>
            <div className={classes.menu_card}>
              <div className={classes.details} style={{ width: "auto" }}>
                <h3 className={classes.item__name}>Lemon Coriander Soup</h3>
                <div className={classes.item__price}>₹155</div>
                <h3 className={classes.item__name}>Minestrone Soup</h3>
                <div className={classes.item__price}>₹190</div>
                <h3 className={classes.item__name}>
                  Cream of French Onion Soup
                </h3>
                <div className={classes.item__price}>₹185</div>
                <h3 className={classes.item__name}>
                  Cream of Broccoli and Asparagus Soup
                </h3>
                <div className={classes.item__price}>₹215</div>
              </div>
            </div>
          </li>

          <div className={classes.headline__big}>CHINESE SOUPS</div>
          <li className={classes.mealitem}>
            <div className={classes.menu_card}>
              <div className={classes.details} style={{ width: "auto" }}>
                <h3 className={classes.item__name}>Veg. Clear Soup</h3>
                <div className={classes.item__price}>₹135</div>
                <h3 className={classes.item__name}>Veg. Noodles Soup</h3>
                <div className={classes.item__price}>₹135</div>
                <h3 className={classes.item__name}>Cream of Spinach</h3>
                <div className={classes.item__price}>₹160</div>
                <h3 className={classes.item__name}>Cream of Tomato Soup</h3>
                <div className={classes.item__price}>₹180</div>
                <h3 className={classes.item__name}>Veg. Sweet Corn Soup</h3>
                <div className={classes.item__price}>₹180</div>
                <h3 className={classes.item__name}>Hot and Sour Soup</h3>
                <div className={classes.item__price}>₹195</div>
              </div>
            </div>
          </li>
        </ul> */}
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

export default Starters;
