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
    id: 'm208',
    name: 'Banana',
    description: '',
    price: 115,
    image: '',
    veg: true,
    category: 'Milk Shakes',
  },
  {
    id: 'm209',
    name: 'Chocolate',
    description: '',
    price: 295,
    image: '',
    veg: true,
    category: 'Milk Shakes',
  },
  {
    id: 'm210',
    name: 'Blue Berry',
    description: '',
    price: 205,
    image: '',
    veg: true,
    category: 'Milk Shakes',
  },
  {
    id: 'm211',
    name: 'Strawberry Crush Ice Cream Shake',
    description: '',
    price: 105,
    image: '',
    veg: true,
    category: 'Milk Shakes',
  },
];

function MilkShakes(props) {
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

  let MilkShakes = filteredList.filter(
    (meal) => meal.category === 'Milk Shakes'
  );
  // let ChineseStarters = filteredList.filter(
  //   (meal) => meal.category === 'Chinese Starters'
  // );

  const MilkShakesitems = MilkShakes.map((meal) => (
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
        <div className={classes.headline__big}> Milk Shakes</div>
        <ul>{MilkShakesitems} </ul>

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

export default MilkShakes;
