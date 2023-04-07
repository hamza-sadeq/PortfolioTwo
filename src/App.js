import React from 'react'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Services from './Components/Services'
import Resume from './Components/Resume'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './Components/Portfolio'
import HireMe from './Components/HireMe'
import Contact from './Components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <AboutMe />
      <Services />
      <Resume />
      <Portfolio />
      <HireMe />
      <Contact />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/services' element={<Services />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App