import React, { useState } from 'react'
import axios from 'axios';
const Form = () => {
    const [name,setName]=useState('');
    const [age,setAge]=useState('')
    const [fees,setFees]=useState('')

  async  function handleSubmit(e){
         e.preventDefault();

         try {
            const {data} = await axios.post('http://localhost:5000/student/createdoc',{name,age,fees});
            console.log(data)
         } catch (error) {
            console.log(error)
         }
    }
  return (
      <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="age">age:</label>
                <input type="number" name="age" id="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="fees">Fees:</label>
                <input type="number" name="fees" id="fees" value={fees} onChange={(e)=>setFees(e.target.value)} />
            </div>
            <div>
                <button>submit</button>
            </div>
        </form>
      </div>
  )
}

export default Form