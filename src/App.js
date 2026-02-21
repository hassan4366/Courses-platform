import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Header from './Home/Header'
import Numbers from './Home/Numbers'
import Categories from './Home/Categories'
import Courses from './Home/Courses'
import Instractor from './Home/Instractor'
import Checkout from './Home/Checkout'



function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Numbers />
      <Categories />
      <Courses />
      <Instractor />
      <Checkout />
      <Footer />
    </div>
  )
}

export default App;