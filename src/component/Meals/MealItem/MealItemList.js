import React from "react";
import MealItem from "./MealItem";
import Card from "../../UI/Card/Card";

import classes from "./MealItemList.module.css";

function Meals(props) {
  let finalMeals = [];
  console.log(props.meals[0].category);

  const categoryHandler = (e) => {
    console.log(e.target.id);
    const listt = props.meals.filter((meal) => {
      if (meal.category === "Appetizers") {
        console.log("first");
        finalMeals.push(meal);
        console.log(finalMeals);
      } else if (meal.category === "Sides and Breads") {
        console.log("second");
        finalMeals.push(meal);
      } else if (meal.category === "Tandori") {
        finalMeals.push(meal);
      } else if (meal.category === "Biryani") {
        finalMeals.push(meal);
      }
    });
  };
  console.log(finalMeals);
  const mealsList = finalMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
      category={meal.category}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <button onClick={categoryHandler} id="Appetizers">
          Appetizers
        </button>
        <button onClick={categoryHandler} id="Sides and Breads">
          Sides and Breads
        </button>
        <button onClick={categoryHandler} id="Tandori">
          Tandori
        </button>
        <button onClick={categoryHandler} id="Biryani">
          Biryani
        </button>
        {/* <ul>{mealsList}</ul> */}
      </Card>
    </section>
  );
}

export default Meals;
