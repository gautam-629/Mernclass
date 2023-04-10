import React from 'react'
const Getinfo = (props) => {
  const {name,age,fees} =props;
  return (
    <>
    <div className='box'>
      <p>Name:{name}</p>
      <p>age:{age}</p>
      <p>fess:{fees}</p>
    </div>  
    </>
  )
}

export default Getinfo