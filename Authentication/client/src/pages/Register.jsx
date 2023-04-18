import React, { useState ,useContext} from 'react'
import UserConText from '../context/UserContext';
import axios from 'axios';
const Register = () => {

  
    //userContext
    const userContext=useContext(UserConText)

  const initial={
    name:'',
    email:'',
    password:''
  }
  function handleChange(e){
       const {value,name}=e.target;
      //  setUserRegisterData({...userRegisterData,[e.target.name]:e.target.value})
      setUserRegisterData({...userRegisterData,[name]:value})
      /*
    The code is using object destructuring syntax to first copy all the existing key-value pairs from the userRegisterData object,
     and then replace the value of the property specified by the name attribute of the HTML input element triggering the change event (e.target.name), with the new value provided by the input element (e.target.value).
      */
  }

  async function handleForm(e){
      e.preventDefault();
      try {
           const {data}= await axios.post('http://localhost:5000/api/register',{name,email,password});
          //  data.user.role
          //  data.isAuth
          userContext.setisAuth(data.isAuth);
          userContext.setUserData(data.user);
      } catch (error) {
        console.log(error);
      }
      // console.log({name,email,password});
  }
  const [userRegisterData,setUserRegisterData]=useState(initial);
  const {name,email,password}=userRegisterData;
  return (
    <div className='formWrapper'>
        <div>
    <form onSubmit={handleForm}>
        <div className='formstyle'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={name} />
        </div>
       <div className='formstyle'>
         <label htmlFor="email">Email:</label>
         <input type="text" name="email" id="email" onChange={handleChange} value={email}/>
       </div>
       <div className='formstyle'>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={handleChange} value={password}/>
       </div>
       <div>
        <button>submit</button>
       </div>
    </form>
    </div>
    </div>
  )

}

export default Register