import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Header from './Home/Header'
import Numbers from './Home/Numbers'
import Categories from './Home/Categories'
import Courses from './Home/Courses'



function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Numbers />
      <Categories />
      <Courses />
      <Footer />
    </div>
  )
}

export default App