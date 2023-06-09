import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Home from './Home'
import About from './About'
import Contact from './Contact'
import NoPage from './NoPageFound'
import Login from './Auth/Login'

export default function Routers() {
  return (
    <>
   
  
  <BrowserRouter>
  <Header />
  <main>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/auth/Login' element={<Login />} />
   <Route path='*' element={<NoPage />} />
    </Routes>
    </main>
    </BrowserRouter>
  
  <Footer />
    
    
    </>
  )
}
