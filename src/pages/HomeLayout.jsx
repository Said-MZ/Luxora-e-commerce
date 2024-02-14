import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-elements py-20">
        {isPageLoading ? <Loading /> : <Outlet />}
      </section>
      <Footer />
    </>
  );
};

export default HomeLayout;
