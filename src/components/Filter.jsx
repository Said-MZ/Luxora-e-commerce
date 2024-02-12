import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormIRange from "./FormIRange";
import FormCheckbox from "./FormCheckbox";

const Filter = () => {
  const { meta, params } = useLoaderData();
  const { search, category, company, order, price, shipping } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-6  grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        label={"Select Category"}
        name={"category"}
        list={meta.categories}
        size={"select-sm"}
        defaultValue={category}
      />
      <FormSelect
        label={"Select Company"}
        name={"company"}
        list={meta.companies}
        size={"select-sm"}
        defaultValue={company}
      />
      <FormSelect
        label={"Sort By"}
        name={"order"}
        list={["a-z", "z-a", "price-lowest", "price-highest"]}
        size={"select-sm"}
        defaultValue={order}
      />
      <FormIRange
        label={"Select Price"}
        name={"price"}
        size={"range-sm"}
        price={price}
      />
      <FormCheckbox
        label={"Free Shipping"}
        name={"shipping"}
        size={"checkbox-sm"}
        defaultValue={shipping}
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
