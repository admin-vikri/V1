import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  isVeg: "",
};
let updtaedTotalAmountA;
let updatedItemsA;
let updatedTotalAmountR;
let updatedItemsR;
let isVegN;

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //const updateItems = state.items.concat(action.item);
    updtaedTotalAmountA =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItemsA = [...state.items];
      updatedItemsA[existingCartItemIndex] = updatedItem;
    } else {
      updatedItemsA = state.items.concat(action.item);
    }

    return {
      isVeg: isVegN,
      items: updatedItemsA,
      totalAmount: updtaedTotalAmountA,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    updtaedTotalAmountA = state.totalAmount - existingItem.price;

    if (existingItem.amount === 1) {
      updatedItemsA = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItemsA = [...state.items];
      updatedItemsA[existingCartItemIndex] = updatedItem;
    }
    return {
      isVeg: isVegN,
      items: updatedItemsA,
      totalAmount: updtaedTotalAmountA,
    };
  }

  if (action.type === "VEG") {
    isVegN = action.vegs;
    return {
      isVeg: isVegN,
      items: updatedItemsA,
      totalAmount: updtaedTotalAmountA,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const addVegOrNot = (veg) => {
    dispatchCartAction({ type: "VEG", vegs: veg });
  };

  const cartContext = {
    items: cartState.items,
    isVeg: cartState.isVeg,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    addVeg: addVegOrNot,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
