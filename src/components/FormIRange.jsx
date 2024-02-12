import React, { useState } from "react";
import { formatPrice } from "../utils";
const FormIRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [price, setPrice] = useState(maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span className="label-text capitalize">{formatPrice(price)}</span>
      </label>
      <input
        type="range"
        name={name}
        id={name}
        max={maxPrice}
        step={step}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs mx-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormIRange;
