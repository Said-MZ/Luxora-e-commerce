import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <div className=" grid gap-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="card bg-base-200 w-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:bg-base-300"
          >
            <figure>
              <img
                src={image}
                alt={title}
                className="w-full h-64 md:h-52 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl capitalize font-bold text-center text-primary">
                {title}
              </h2>
              <p className="text-center">{formatPrice(price)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
