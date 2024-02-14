import React from "react";
import { CartTotal, CheckoutForm, SectionTitle } from "../components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warning("You need to login to access this page");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return (
      <div className="min-h-96">
        <SectionTitle text="Your cart is empty" />
      </div>
    );
  }
  return (
    <>
      <SectionTitle text="Checkout" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotal />
      </div>
    </>
  );
};

export default Checkout;
