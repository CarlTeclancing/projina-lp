import { useState } from 'react'
import LandingPage from './LandingPage'
import { BrowserRouter ,Routes ,Route  ,Navigate } from 'react-router-dom'
import Layout from './Layout'
import NotFound from './pages/404.jsx'
import Pricing from './pages/Pricing.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LandingPage/>} /> */}
        <Route path='/' element={<Layout/>}>
          <Route index path='/home' element={<LandingPage/>} />
          <Route index path='/' element={<Navigate to={"/home"} />} />

          <Route path='/pricing' element={<Pricing/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
