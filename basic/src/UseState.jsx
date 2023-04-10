import React, { useState } from 'react';
const UseState = () => {
    const [count,setCount]=useState(0);
    function handleChange(){
        setCount(count+1)
    }
    function decChange(){
        if(count===0){
            setCount(0)
        }
        else{
            setCount(count-1)
        }
    }
  return (
    <>
     <div className='count'>
        <button onClick={decChange} >-</button>
        <p>Count:{count}</p>
        {/* <button onClick={(e)=>setCount(count+1)}>+</button> */}
         <button onClick={handleChange}>+</button>
     </div>
    </>
  )
}

export default UseState


import axios from 'axios';
const axios=require('axios')

export default axios;
module.exports=axios;
