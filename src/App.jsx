import React from 'react'
import Nav from './Components/Nav'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marques from './Components/Marques'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const locomotiveScroll=new LocomotiveScroll()
  return (
    <div className='w-full h-full bg-black text-white '>
     <Nav/>
     <Work/>
    < Stripes/>
    <Products/>
    <Marques/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App