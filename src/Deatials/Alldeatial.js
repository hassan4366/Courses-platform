import React from 'react' 
import Footer from '../components/footer'
import Comments from '../Home/comments'
import Courses from './Courses'
import Navbar2 from '../components/Navbar2'
import { useState } from 'react'
<<<<<<< HEAD
import Header1 from './Header1'
=======
import Content from './Content'
>>>>>>> e24b63236ce2336c2a9f20eb272f90a3d7ffd92e

function Alldeatial() {
  const [search, setSearch] = useState("");
  return (
      <div>
<<<<<<< HEAD
          <Navbar2 search={search} setSearch={setSearch} />
          <Header1 />
=======
      <Navbar2 search={search} setSearch={setSearch} />
      <Content />
>>>>>>> e24b63236ce2336c2a9f20eb272f90a3d7ffd92e
          <Comments />
          <Courses/>
          <Footer/>
    </div>
  )
}

export default Alldeatial