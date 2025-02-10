import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Fooditems from "../components/Fooditems";
import Cart from "../components/Cart";

function Home() {
  return (
    <>
      <Navbar />
      <Category />
      <Fooditems />
      <Cart />
    </>
  );
}

export default Home;
