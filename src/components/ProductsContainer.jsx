import React, { useState } from "react";
import ProductList from "./ProductList";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [activeStyle, setActiveStyle] = useState("grid");

  const toggleActiveStyle = (style) => {
    setActiveStyle(style);
  };
  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => toggleActiveStyle("grid")}
            className={`hidden md:flex btn btn-circle ${
              activeStyle === "grid" ? "btn-neutral" : "btn-ghost"
            }`}
          >
            <BsFillGridFill />
          </button>

          <button
            onClick={() => toggleActiveStyle("cols")}
            className={`hidden md:flex btn btn-circle ${
              activeStyle !== "grid" ? "btn-neutral" : "btn-ghost"
            }`}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div className="pt-12">
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : activeStyle === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
