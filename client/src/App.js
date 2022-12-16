import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Components/Create';

import Menu from './Components/Menu'
import Home from './Components/Home'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/Home'} element={<Home/>}/>
        <Route path={'/Create'} element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App