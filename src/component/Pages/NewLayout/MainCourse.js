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
    id: 'm159',
    name: 'Veg. Manchurian',
    description: '',
    price: 235,
    image: '',
    category: 'Chinese Main Course',
  },
  {
    id: 'm169',
    name: 'Sweet & Sour Vegetables',
    description: '',
    price: 235,
    image: '',
    veg: true,
    category: 'Chinese Main Course',
  },
  {
    id: 'm170',
    name: 'Veg. Balls In Green Chilly Sauce',
    description: '',
    price: 235,
    image: '',
    veg: true,
    category: 'Chinese Main Course ',
  },
  {
    id: 'm171',
    name: 'Veg. Schezwan',
    description: '',
    price: 255,
    image: '',
    veg: true,
    category: 'Chinese Main Course',
  },
  {
    id: 'm172',
    name: 'Veg. Balls In Garlic (Hot Garlic)',
    description: '',
    price: 265,
    image: '',
    veg: true,
    category: 'Chinese Main Course',
  },
  {
    id: 'm173',
    name: 'Mushroom (Your choice of sauce)',
    description:
      'Chilly/Manchurian/Garlic/Ginger/   Hong Kong/Schezwan/Black Bean',
    price: 295,
    image: '',
    veg: true,
    category: 'Chinese Main Course',
  },
  {
    id: 'm174',
    name: 'Baby Corn (Your choice of sauce)',
    description:
      'Chilly/Manchurian/Garlic/Ginger/   Hong Kong/Schezwan/Black Bean',
    price: 295,
    image: '',
    veg: true,
    category: 'Chinese Main Course',
  },
  {
    id: 'm175',
    name: 'Paneer (Your choice of sauce)',
    description:
      'Chilly/Manchurian/Garlic/Ginger/   Hong Kong/Schezwan/Black Bean',
    price: 335,
    image: '',
    veg: true,
    category: 'Chinese Main Course ',
  },
  {
    id: 'm176',
    name: 'Red Indian Special Vegetables',
    description:
      'Diced Vegetables with Paneer, Baby Corn & Mushroom in Red Sauce',
    price: 345,
    image: '',
    veg: true,
    category: 'Chinese Main Course',
  },

  {
    id: 'm177',
    name: 'Green Thai Curry',
    description:
      'Chilly/Manchurian/Garlic/Ginger/   Hong Kong/Schezwan/Black Bean',
    price: 305,
    image: '',
    veg: true,
    category: 'Chinese Main Course',
  },

  {
    id: 'm178',
    name: 'Paneer (Your choice of sauce)',
    description:
      'Chilly/Manchurian/Garlic/Ginger/   Hong Kong/Schezwan/Black Bean',
    price: 335,
    image: '',
    veg: true,
    category: 'Chinese Main Course',
  },

  {
    id: 'm179',
    name: 'Paneer (Your choice of sauce)',
    description:
      'Chilly/Manchurian/Garlic/Ginger/   Hong Kong/Schezwan/Black Bean',
    price: 335,
    image: '',
    veg: true,
    category: 'Chinese Main Course',
  },
];

function MainCourse(props) {
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

  let MainCourse = filteredList.filter(
    (meal) => meal.category === 'Chinese Main Course'
  );
  // let categoryChSoup = filteredList.filter(
  //   (meal) => meal.category === 'CHINESE SOUPS'
  // );

  const mealsList = MainCourse.map((meal) => (
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
        <div className={classes.headline__big}>Chinese Main Course</div>
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

export default MainCourse;
