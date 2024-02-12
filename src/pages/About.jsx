import React from "react";

const About = () => {
  return (
    <section className="text-secondary-content tracking-wide leading-8">
      {/* <div className="bg-base-content absolute shadow-2xl blur-[8rem] shadow-base-content -z-10 rounded-full opacity-25 w-[30rem] h-[30rem] top-0 -right-96 "></div>
      <div className="bg-base-content absolute shadow-2xl blur-[8rem] shadow-base-content -z-10 rounded-full opacity-25 w-[30rem] h-[30rem] -bottom-2 -left-96 "></div>
      <div className="bg-base-content absolute shadow-2xl blur-[10rem] shadow-base-content -z-10 rounded-full opacity-25 w-96 h-96 -bottom-[38rem] -right-80 md:-bottom-72 md:right-52 "></div> */}
      <h1 className="text-3xl font-bold mb-5 text-primary">
        About{" "}
        <span
          //glow text
          className="px-1 text-base-content glow-gold"
        >
          Luxoria{" "}
        </span>
        Store
      </h1>
      <div className="divider mb-8"></div>
      <p className="mb-5">
        Luxoria Store is a modern e-commerce store that sells a variety of
        products. We are dedicated to providing our customers with the best
        products and services. We are committed to providing the best customer
        service and making sure our customers are satisfied with their purchase.
      </p>
      <p>
        We are a small business that is dedicated to providing our customers
        with the best products and services. We are committed to providing the
        best customer service and making sure our customers are satisfied with
        their purchase.
      </p>
      <h2 className="text-2xl font-bold mt-28 mb-5 text-primary">
        Our Mission
      </h2>
      <div className="divider mb-8"></div>
      <p className="mb-5">
        Our mission is to provide our customers with the best products and
        services. We are committed to providing the best customer service and
        making sure our customers are satisfied with their purchase.
      </p>
      <p>
        We are dedicated to providing our customers with the best products and
        services. We are committed to providing the best customer service and
        making sure our customers are satisfied with their purchase.
      </p>

      <h2 className="text-2xl font-bold mt-28 mb-5 text-primary">Our Vision</h2>
      <div className="divider mb-8"></div>
      <p className="mb-5">
        Our vision is to be the best e-commerce store in the world. We are
        committed to providing the best customer service and making sure our
        customers are satisfied with their purchase.
      </p>
      <p>
        We are dedicated to providing our customers with the best products and
        services. We are committed to providing the best customer service and
        making sure our customers are satisfied with their purchase.
      </p>
    </section>
  );
};

export default About;
