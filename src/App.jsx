import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar'
const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' Component={NavBar}/>
</Routes>
</BrowserRouter>
   
  )
}

export default App