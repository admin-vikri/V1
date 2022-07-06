import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  let { items } = cartCtx;
  if (items === undefined) {
    items = [];
  }
  console.log(items);
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const checkHandler = (e) => {
    console.log(e.target.checked, e.target.id);
    if (e.target.checked && e.target.id === "veg") {
      cartCtx.addVeg("veg");
    } else if (e.target.checked && e.target.id === "nonveg") {
      cartCtx.addVeg("nonveg");
    } else {
      cartCtx.addVeg("");
    }
  };
  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span style={{ margin: "0px -6px" }}>Items</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
      {props.onOption ? (
        // <div className={classes.p__relative}>
        //   <img
        //   src={filterImage}
        //   alt="filter"
        //   style={{ height: "21px", width: "14px" }}
        // />
        //   <input type="checkbox" id="veg" onChange={checkHandler} />
        //   <label htmlFor="veg">Veg</label>
        // </div>
        <div className={classes.filter__list}>
          <label className={classes.custom__checkbox}>
            {" "}
            Veg
            <input type="checkbox" id="veg" onChange={checkHandler} />
          </label>
          <label className={classes.custom__checkbox}>
            {" "}
            Non Veg
            <input type="checkbox" id="nonveg" onChange={checkHandler} />
          </label>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default HeaderCartButton;
