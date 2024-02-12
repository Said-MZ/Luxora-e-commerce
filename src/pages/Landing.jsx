import React from "react";
import { Hero } from "../components";
import { customFetch } from "../utils";
const url = "/products?featured=true";

// get products with axios

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Landing;
