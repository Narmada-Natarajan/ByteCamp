import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero' 
import Footer from '../components/Footer' 
import Features from '../components/Features'
import Home from '../pages/Home'
import Testimonials from '../components/Testimonials'
import Project from '../components/Project'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <Features/>
      <Testimonials/>
      <Footer/>
      
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App