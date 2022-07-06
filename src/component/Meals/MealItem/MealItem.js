import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import veg from "../../../assets/veg.png";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = "₹" + `${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div className={classes.menu_card}>
        {props.image === "" || props.image == null ? (
          <p></p>
        ) : (
          <>
            <img className={classes.image} src={props.image} alt="roll" />
          </>
        )}
        <img className={classes.veg} src={props.imageV} />
        <div className={classes.details} style={{ width: "auto" }}>
          <h3 className={classes.item__name}>{props.name}</h3>
          <div className={classes.item__description}>{props.description}</div>
          <div className={classes.item__price}>{price}</div>
        </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
    // <li className={classes.meal}>
    //   <div>
    //    <h3>{props.name}</h3>
    //     <div className={classes.description}>{props.description}</div>
    //     <div className={classes.price}>{price}</div>
    // </div>
    //   <div>
    //     <MealItemForm onAddToCart={addToCartHandler} />
    //    </div>
    // </li>
  );
}

export default MealItem;
