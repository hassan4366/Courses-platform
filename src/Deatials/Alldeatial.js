import React from 'react' 
import Footer from '../components/footer'
import Comments from '../Home/comments'
import Courses from './Courses'
import Navbar2 from '../components/Navbar2'
import { useState } from 'react'

function Alldeatial() {
  const [search, setSearch] = useState("");
  return (
      <div>
          <Navbar2 search={search} setSearch={setSearch} />
          <Comments />
          <Courses/>
          <Footer/>
    </div>
  )
}

export default Alldeatial