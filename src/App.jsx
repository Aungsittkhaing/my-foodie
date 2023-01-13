import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./index.css"
import Meals from './Meals'
import Detail from './Detail'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className='container mx-auto relative'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meals/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
    </div>
  )
}

export default App