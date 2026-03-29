import React, { useState } from "react";
import DesignCourses from "./DesignCourses";
import Navbar2 from "../components/Navbar2";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "../components/footer";


function AllCatogory() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar2 search={search} setSearch={setSearch} />
      <DesignCourses search={search} />
      <Popular />
      <Featured />
      <Footer />
    </div>
  );
}

export default AllCatogory;
