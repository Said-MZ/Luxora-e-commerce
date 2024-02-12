import React from "react";
import { customFetch } from "../utils";
import Filter from "../components/Filter";
import ProductsContainer from "../components/ProductsContainer";
import PaginationContainer from "../components/PaginationContainer";

const url = "/products";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URLSearchParams(request.url).entries(),
  ]);

  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};
const Products = () => {
  return (
    <>
      <Filter />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
