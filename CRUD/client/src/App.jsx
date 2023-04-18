import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Edit from './pages/Edit'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
       <BrowserRouter>
           <Navbar/>
           <Routes>
            <Route path='/' index element={<Home/>}/>
            <Route path='/edit/:id' index element={<Edit/>}/>
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App