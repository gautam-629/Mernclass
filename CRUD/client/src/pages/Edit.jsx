import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
const Edit = () => {
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [age,setAge]=useState('')
    const [fees,setFees]=useState('')
    const {id}=useParams();
    useEffect(()=>{
      ( async function(){
           try {
            const res = await axios.get(`http://localhost:5000/student/getsingledoc/${id}`);
            console.log(res.data)
            setName(res.data.student.name)
            setAge(res.data.student.age)
            setFees(res.data.student.fees)
           } catch (error) {
            console.log(error)
           }
       })()
    },[])


  async  function handleSubmit(e){
         e.preventDefault();
         try {
            const {data} = await axios.put(`http://localhost:5000/student/updatedoc/${id}`,{name,age,fees});
             navigate('/')
         } catch (error) {
            console.log(error)
         }
    }
  return (
      <div className='editForm'>
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

export default Edit;