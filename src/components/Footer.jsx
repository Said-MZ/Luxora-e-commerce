import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-base-200 py-12 text-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 align-elements text-left">
        <div>
          <Link
            to="/"
            className="btn bg-base-content text-base-100 hover:bg-base-300 hover:text-base-content  items-center jus text-6xl w-28 h-28 btn-circle "
          >
            L
          </Link>
          <h2 className="text-3xl font-medium tracking-wider mt-4">Luxoria</h2>
          <div className="flex flex-col gap-4">
            <h3 className="text-primary text-lg font-semibold tracking-wider mt-4">
              Get in touch
            </h3>
            <ul className="flex flex-col gap-2 text-primary">
              <li>
                <a
                  className="py-2 hover:text-base-content transition duration-300"
                  href="tel:+23412345678"
                >
                  Phone: +23412345678
                </a>
              </li>
              <li>
                <a
                  className="py-2 hover:text-base-content transition duration-300"
                  href="mailto:hello@luxoria.org"
                >
                  Email: hello@luxoria.org
                </a>
              </li>
              <li>Address: 123, Luxoria Avenue, Lagos</li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-medium tracking-wider mt-4">
            Quick Links
          </h2>
          <div className="divider max-w-[90%]"></div>
          <ul>
            <Link to="/about">
              <li className="mt-2 text-primary hover:text-base-content text-lg transition duration-300 pb-2">
                About Us
              </li>
            </Link>
            <Link to="/products">
              <li className="mt-2 text-primary hover:text-base-content text-lg transition duration-300 pb-2">
                Products
              </li>
            </Link>
            <Link to="/cart">
              <li className="mt-2 text-primary hover:text-base-content text-lg transition duration-300 pb-2">
                Cart
              </li>
            </Link>
            <Link to="/checkout">
              <li className="mt-2 text-primary hover:text-base-content text-lg transition duration-300 pb-2">
                Checkout
              </li>
            </Link>
            <Link to="/orders">
              <li className="mt-2 text-primary hover:text-base-content text-lg transition duration-300 pb-2">
                Orders
              </li>
            </Link>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-medium tracking-wider mt-4">
            Social Media
          </h2>
          <div className="divider max-w-[90%]"></div>
          <ul>
            <li className="mt-2 text-primary hover:text-base-content text-lg transition duration-300 pb-2">
              <a href="https://twitter.com/luxoria" target="_blank">
                Twitter
              </a>
            </li>
            <li className="mt-2 text-primary hover:text-base-content text-lg transition duration-300 pb-2">
              <a href="https://facebook.com/luxoria" target="_blank">
                Facebook
              </a>
            </li>
            <li className="mt-2 text-primary hover:text-base-content text-lg transition duration-300 pb-2">
              <a href="https://instagram.com/luxoria" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-primary">
          &copy; Luxoria {year}. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
