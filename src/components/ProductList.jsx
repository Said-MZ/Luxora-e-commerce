import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductList = () => {
  const { products } = useLoaderData();
  return (
    <div>
      {products.map(({ id, attributes }) => {
        const { title, price, image, company } = attributes;
        return (
          <Link
            to={`/products/${id}`}
            key={id}
            className="mb-6 group card flex flex-col flex-wrap gap-y-4 sm:flex-row bg-base-200 w-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 rounded-lg hover:bg-base-300"
          >
            <figure className=" rounded-tr-lg rounded-tl-lg sm:rounded-tr-none sm:rounded-br-none ">
              <img
                src={image}
                alt={title}
                className="h-52 text-left w-full sm:h-48 sm:w-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </figure>
            <div className="card-body ml-0 sm:ml-16 p-8 flex flex-row justify-between items-center text-left">
              <div>
                <h3 className="text-lg capitalize font-bold text-left text-primary ">
                  {title}
                </h3>
                <h4 className="capitalize text-md text-neutral-content">
                  {company}
                </h4>
              </div>
              <p className="text-right font-medium">{formatPrice(price)}</p>
            </div>
          </Link>
          //   <Link
          //     to={`/products/${id}`}
          //     key={id}
          //     className="card bg-base-200 w-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:bg-base-300"
          //   >
          //     <figure>
          //       <img
          //         src={image}
          //         alt={title}
          //         className="w-full h-64 md:h-52 object-cover"
          //       />
          //     </figure>
          //     <div className="card-body">
          //       <h2 className="text-xl capitalize font-bold text-left text-primary">
          //         {title}
          //       </h2>
          //       <p className="text-left">{formatPrice(price)}</p>
          //     </div>
          //   </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
