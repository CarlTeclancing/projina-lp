import { useState } from 'react'
import LandingPage from './LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import NotFound from './pages/404.jsx'
import Pricing from './pages/Pricing.jsx'
import Solutions from './pages/Solutions.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<LandingPage/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/solutions' element={<Solutions/>} />
          <Route path='/about' element={<About/>}/>
        </Route>
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
