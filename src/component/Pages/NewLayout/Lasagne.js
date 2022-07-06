/** @format */

import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import Card from '../../UI/Card/Card';
import classes from './Lasagne.module.css';
import MealItem from '../../Meals/MealItem/MealItem';
import ShowMeals from './ShowMeals';
import CartContext from '../../store/cart-context';

const DUMMY_MEALS = [
  {
    id: 'm141',
    name: 'Napoletana',
    description: 'Fresh Basil & Tomato Sauce & Topped with Cheese',
    price: 385,
    image:
      'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Lasagne',
  },
  {
    id: 'm142',
    name: 'Corn & Spinach',
    description:
      'Sauteed Corn & Spinach in Cheese filling & Topped with Olives',
    price: 445,
    image:
      'https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Lasagne',
  },
  {
    id: 'm143',
    name: 'Primavera',
    description:
      'Assorted Garden Fresh Green Vegetables & Am. Corn in Cheese filling Topped with Marinara Sauce',
    price: 515,
    image:
      'https://images.unsplash.com/photo-1629115916087-7e8c114a24ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Lasagne',
  },

  {
    id: 'm144',
    name: 'Cannelonial Forno',
    description:
      'Rolled Pasta dressed with stuffed Spinach, Herbs & Cheese Sauce',
    price: 315,
    image:
      'https://images.unsplash.com/photo-1633436374961-09b92742047b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Lasagne',
  },
];

function Lasagne(props) {
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

  let Lasagness = filteredList.filter((meal) => meal.category === 'Lasagne');
  // let categoryChSoup = filteredList.filter(
  //   (meal) => meal.category === 'CHINESE SOUPS'
  // );

  const mealsListCSoup = Lasagness.map((meal) => (
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
      <div className='search-header' style={{ textAlign: 'center' }}>
        <input
          className={classes.searchbar}
          placeholder='Search your favourite...'
          onChange={filterBySearch}
        />
      </div>
      <Card>
        <div className={classes.headline__big}>Lasagne</div>
        <ul>{mealsListCSoup}</ul>
        <ul>
          {/* <div className={classes.headline__big}>CHINESE SOUPS</div> */}
          <li className={classes.mealitem}>
            <div className={classes.menu_card}>
              <div className={classes.details} style={{ width: 'auto' }}>
                {/* {mealsListChSoup} */}
              </div>
            </div>
          </li>
        </ul>

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
            width: '100%',
            backgroundColor: '#000',
            color: '#fff',
          }}
          onClick={back}>
          Back
        </button>
      </Card>
    </section>
  );
}

export default Lasagne;
