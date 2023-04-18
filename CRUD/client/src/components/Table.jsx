import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
const Table = () => {
  const [students, setStudents] = useState([])
  async function fetchAllDoc() {
    try {
      const res = await axios.get('http://localhost:5000/student/getalldoc');
      setStudents(res.data.student);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAllDoc()
  }, [])

  function handleDelate(id){
     const res= axios.delete(` http://localhost:5000/student/deletedoc/${id}`);
     console.log(res.data)
  }

  return (
    <div>
      <table border={1} cellSpacing={0} width={500}>
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>fees</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>
           {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.fees}</td>
              <td><button onClick={()=>handleDelate(student._id)}>Delete</button></td>
              <td><Link to={`edit/${student._id}`}><button>update</button></Link></td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  )
}
export default Table;