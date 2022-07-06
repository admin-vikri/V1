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
    id: 'm195',
    name: 'Vanilla Ice Cream',
    description: '',
    price: 435,
    image: '',
    veg: true,
    category: 'Desserts',
  },
  {
    id: 'm196',
    name: 'Strawberry Crush Ice Cream',
    description: '',
    price: 205,
    image: '',
    veg: true,
    category: 'Desserts',
  },
  {
    id: 'm197',
    name: 'Vanilla with Hot Chocolate Sauce',
    description: '',
    price: 205,
    image:
      'https://images.unsplash.com/photo-1639744092433-0e98ca50d5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmFuaWxsYSUyMHdpdGglMjBob3QlMjBjaG9jb2xhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Desserts',
  },
  {
    id: 'm198',
    name: 'Caramel Custard',
    description: '',
    price: 105,
    image: '',
    veg: true,
    category: 'Desserts',
  },
  {
    id: 'm199',
    name: 'Sizzling Brownie with Vanilla / Strawberry crush (Single)',
    description: '',
    price: 235,
    image:
      'https://images.unsplash.com/photo-1639744093238-d12f04cf5950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2l6emxpbmclMjBicm93bmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    veg: true,
    category: 'Desserts',
  },
  {
    id: 'm200',
    name: 'Sizzling Brownie with Vanilla / Strawberry crush (Double)',
    description: '',
    price: 335,
    image: '',
    veg: true,
    category: 'Desserts',
  },
];

function Desserts(props) {
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

  let Desserts = filteredList.filter((meal) => meal.category === 'Desserts');
  // let ChineseStarters = filteredList.filter(
  //   (meal) => meal.category === 'Chinese Starters'
  // );

  const Dessertitem = Desserts.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      category={meal.category}
    />
  ));

  // const ChineseStartersItem = ChineseStarters.map((meal) => (
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
        <div className={classes.headline__big}> Deserts</div>
        <ul>{Dessertitem} </ul>

        {/* <div className={classes.headline__big}>Chinese Starters</div>
        <ul>{ChineseStartersItem} </ul> */}
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

export default Desserts;
