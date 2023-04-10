import React, { useEffect ,useState} from 'react'
const UseEffect = () => {
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
    useEffect(()=>{
        document.title=count;
    },[count])
  return (
    <>
     <div className='count'>
        <button onClick={decChange} >-</button>
        <p>Count:{count}</p>
         <button onClick={handleChange}>+</button>
     </div>
    </>
  )
}

export default UseEffect