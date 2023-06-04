import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Header from '../Components/Header'

import Home from './Home'
import Home from './About'
import Home from './Contact'

export default function Routes() {
  return (
    <>
    <Header />
  <main>
  <BrowserRouter>
    <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/about' element={<About />} />
   <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </main>
  <Footer />
    
    
    </>
  )
}
