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
    id: 'm180',
    name: 'Steamed Rice',
    description: '',
    price: 105,
    image: '',
    veg: true,
    category: 'Rice & Noodles',
  },

  {
    id: 'm181',
    name: 'Spring Onion Fried Rice',
    description: '',
    price: 185,
    image: '',
    veg: true,
    category: 'Rice & Noodles',
  },

  {
    id: 'm182',
    name: 'Hakka Noodles',
    description: '',
    price: 225,
    image:
      'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm9vZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Rice & Noodles',
  },

  {
    id: 'm183',
    name: 'Veg. Fried Rice',
    description: '',
    price: 235,
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Rice & Noodles',
  },

  {
    id: 'm184',
    name: 'Mushroom Fried Rice',
    description: '',
    price: 255,
    image:
      'https://images.unsplash.com/photo-1512058533999-106ee01bf777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Rice & Noodles',
  },

  {
    id: 'm185',
    name: 'Schezwan Noodles',
    description: '',
    price: 335,
    image:
      'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Rice & Noodles',
  },

  {
    id: 'm186',
    name: 'Schezwan Rice',
    description: '',
    price: 135,
    image:
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Rice & Noodles',
  },
  {
    id: 'm187',
    name: 'Combination Rice',
    description: '',
    price: 305,
    image:
      'https://images.unsplash.com/photo-1582450925753-18f06f902014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Rice & Noodles',
  },
  {
    id: 'm188',
    name: 'Combination Schezwan Rice',
    description: '',
    price: 135,
    image: '',
    veg: true,
    category: 'Rice & Noodles',
  },
  {
    id: 'm190',
    name: 'Singapore Rice',
    description: '',
    price: 235,
    image: '',
    veg: true,
    category: 'Rice & Noodles',
  },
];

function RiceNoodles(props) {
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

  let RiceNoodles = filteredList.filter(
    (meal) => meal.category === 'Rice & Noodles'
  );
  // let categoryChSoup = filteredList.filter(
  //   (meal) => meal.category === 'CHINESE SOUPS'
  // );

  const mealsList = RiceNoodles.map((meal) => (
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
        <div className={classes.headline__big}>Rice and Noodles</div>
        <ul>{mealsList}</ul>
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

export default RiceNoodles;
