import { render, fireEvent, act } from '@testing-library/react';
import { useRef ,useState,useEffect} from 'react';

const  Usecase = ()=> {
    const [mydata,setmydata]= useState("");
    const [count, setcount]=useState(0);
    //const count =useRef(0);
    
    useEffect(()=>
    {
        setcount(count+1);
        //count.current=count.current+1;
    })
  return (
    <>
    <input type="text" placeholder='rate us with numbers' ref={inputRef} />
     <button  value={mydata} onClick={(e)=>setmydata(e.target.value)}> click me to submit </button>
   
    <p> you have clicked the button  :{count.current}  times </p>
    </>
  )
}

export default Usecase

  
  
  
  