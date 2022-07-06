import React from "react";

const CartContext = React.createContext({
  items: [],
  isVeg: "",
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  addVeg: (veg) => {},
});

export default CartContext;
