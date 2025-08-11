import { useState } from 'react'
import LandingPage from './LandingPage'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
      <br/><br/><br/><br/>
    </>
  )
}

export default App
