import React, { useState,useContext } from 'react';
import axios from 'axios';
import UserConText from '../context/UserContext';
const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    //userContext
    const userContext=useContext(UserConText)

    async function handleForm(e){
        e.preventDefault();
        try {
             const {data}= await axios.post('http://localhost:5000/api/login',{email,password});
            //data.user.role
            //data.isAuth
            userContext.setisAuth(data.isAuth);
            userContext.setUserData(data.user);
        } catch (error) {
          console.log(error);
        }
        // console.log({name,email,password});
        setPassword('');
        setEmail('');
    }
  return (
    <div className='formWrapper'>
      {/* {console.log(userContext.isAuth)}
      {console.log(userContext.userData)} */}
        <div>
    <form onSubmit={handleForm}>
       <div className='formstyle'>
         <label htmlFor="email">Email:</label>
         <input type="text" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
       </div>
       <div className='formstyle'>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
       </div>
       <div>
        <button>submit</button>
       </div>
    </form>
    </div>
    </div>
  )
}

export default Login