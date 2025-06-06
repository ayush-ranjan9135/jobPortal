import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/applications'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/apply-job'  element={<ApplyJob />}/>
        <Route path='/applications' element={<Applications/>}/>
      </Routes>
    </div>
  )
}

export default App