import React, { useState } from "react";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { Link, useLoaderData } from "react-router-dom";

const url = `products/`;
export const loader = async ({ params }) => {
  const response = await customFetch(url + params.id);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(+e.target.value);
  };
  return (
    <section>
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>products</Link>
          </li>
          <li>
            <p>{title}</p>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="h-96 w-full rounded-lg object-cover"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-accent-content font-bold m2-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{formatPrice(price)}</p>
          <p className="mt-6 leading-8">{description}</p>

          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    type="button"
                    key={color}
                    className={`badge mr-2 w-6 h-6 ${
                      color === productColor && "border-3 border-primary"
                    } `}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md border-base-content focus:outline-base-content"
                onChange={handleAmount}
                value={amount}
              >
                {generateAmountOptions(6)}
              </select>
            </div>
            <div className="mt-10 ">
              <button
                className="btn btn-md"
                onClick={() => console.log("add to bag")}
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
