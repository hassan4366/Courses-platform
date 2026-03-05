import React from "react";
import { CartProvider } from "react-use-cart";
import Footer from "../components/footer";
import Navbar2 from "../components/Navbar2";
import Cart from "./cart";

function AllCart() {
  return (
    <CartProvider>
      <Navbar2 />
      <Cart />
      <Footer />
    </CartProvider>
  );
}

export default AllCart;
