import React from "react";
import Footer from "../components/footer";
import Comments from "../Home/comments";
import Courses from "./Courses";
import Navbar2 from "../components/Navbar2";
import { useState } from "react";
import Content from "./Content";
import Header1 from "./Header1";
import { CartProvider } from "react-use-cart";

function Alldeatial() {
  const [search, setSearch] = useState("");
  return (
    <CartProvider>
      <Navbar2 search={search} setSearch={setSearch} />
      <Header1 />
      <Content />
      <Comments />
      <Courses />
      <Footer />
    </CartProvider>
  );
}

export default Alldeatial;
