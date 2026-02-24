import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DesignCourses from "./DesignCourses";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "../components/footer";


function AllCatogory() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <DesignCourses search={search} />
      <Popular />
      <Featured />
      <Footer />
    </div>
  );
}

export default AllCatogory;
