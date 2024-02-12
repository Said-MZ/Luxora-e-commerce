import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const Filter = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-6  grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <FormInput
        label="search product"
        name="search"
        type="search"
        size="input-sm"
      />
      <FormSelect
        label={"Select Category"}
        name={"category"}
        list={meta.categories}
        size={"select-sm"}
      />
      <FormSelect
        label={"Select Company"}
        name={"company"}
        list={meta.companies}
        size={"select-sm"}
      />
      <FormSelect
        label={"Sort By"}
        name={"order"}
        list={["a-z", "z-a", "price-lowest", "price-highest"]}
        size={"select-sm"}
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
