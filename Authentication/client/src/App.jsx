import React, { useEffect, useContext } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Product from './pages/Product'
import Admin from './pages/Admin'
import UserProvider from './context/UserProvider'
import UserConText from './context/UserContext'
const App = () => {

  //context api
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/product'
              element={<UserProtectedRouter>
                <Product />
              </UserProtectedRouter>} />
            <Route path='/admin'
              element={
                <AdminProtectedRouter>
                  <Admin />
                </AdminProtectedRouter>
              } />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>

  )
}

const UserProtectedRouter = ({ children }) => {
  const userContext = useContext(UserConText)
  let isAuth = userContext.isAuth;
  if (!isAuth) {
    return <Navigate to="/login" />
  }
  else {
    return children;
  }
}

const AdminProtectedRouter = ({ children }) => {
  const userContext = useContext(UserConText)
  let isAuth = userContext.isAuth;
  let user = userContext.userData;

  if (isAuth && user.role === 'admin') {
           return children;
  }
  else {
    return <Navigate to="/login" />
  }
}


export default App