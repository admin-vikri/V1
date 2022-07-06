import React from "react";

import classes from "./Soup.module.css";

const ShowMeals = (props) => {
  const price = "₹" + `${props.price.toFixed(2)}`;
  return (
    <>
      <h3 className={classes.item__name}>{props.name}</h3>
      <div className={classes.item__price}>{price}</div>
    </>
  );
};

export default ShowMeals;
