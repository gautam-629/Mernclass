import React, { useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserConText from '../context/UserContext';
const Navbar = () => {
   // let isAuth=true;

   // useContext
   const userContext=useContext(UserConText)
    let isAuth=userContext.isAuth;
    let user=userContext.userData;
   async function logoutUser() {
      const { data } = await axios.get('http://localhost:5000/api/logout');
      userContext.setUserData(null)
      userContext.setisAuth(false)
   }
   return (
      <nav className='navbar'>
         <span>logo</span>
         {console.log(user)}
         {isAuth ? <div>
            <span onClick={logoutUser}>logout</span>
            <Link to={'/product'}> <span>product</span></Link>
         </div>:<div>
            <Link to={'/login'}> <span>login</span></Link>
            <Link to={'/register'}> <span>Register</span></Link>
         </div>}
        
        {isAuth && user.role==='admin' &&  <div>
         <Link to={'/admin'}> <span>Admin Dashboard</span></Link>
         </div>}
        
      </nav>
   )
}
export default Navbar;