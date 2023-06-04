import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Home from './Home'
import About from './About'
import Contact from './Contact'
import NoPage from './NoPageFound'

export default function Routers() {
  return (
    <>
    <Header />
  <main>
  <BrowserRouter>
    <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/about' element={<About />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='*' element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  </main>
  <Footer />
    
    
    </>
  )
}
