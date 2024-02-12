import React from "react";
import { Form, Link } from "react-router-dom";
import FormInput from "./FormInput";

const Filter = () => {
  return (
    <Form className="bg-bas-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <FormInput
        label="search product"
        name="search"
        type="search"
        size="input-sm"
      />
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link className="btn btn-neutral btn-sm" to={"/products"}>
        Reset
      </Link>
    </Form>
  );
};

export default Filter;
