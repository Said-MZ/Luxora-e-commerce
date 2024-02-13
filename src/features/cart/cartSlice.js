import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getLocalStorageCart = () => {
  let cart = localStorage.getItem("cart");
  return JSON.parse(cart) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getLocalStorageCart(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID
      );
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const cartID = action.payload.cartID;
      const product = state.cartItems.find((item) => item.cartID === cartID);
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item removed from cart");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const product = state.cartItems.find((item) => item.cartID === cartID);
      const diff = amount - product.amount;
      product.amount = amount;
      state.numItemsInCart += diff;
      state.cartTotal += diff * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
