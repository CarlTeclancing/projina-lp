import { useState } from 'react'
import LandingPage from './LandingPage'
import { BrowserRouter ,Routes ,Route  } from 'react-router-dom'
import Layout from './Layout'
import NotFound from './pages/404.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LandingPage/>} /> */}
        <Route path='/' element={<Layout/>}>
          <Route index path='/home' element={<LandingPage/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
