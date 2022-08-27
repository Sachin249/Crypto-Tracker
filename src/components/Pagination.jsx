import React,{useState,useEffect} from 'react'

function Pagination({showperpage,Onpaginationchange,coinlimit}) {
    const [counter, setCounter] = useState(1);
    useEffect(()=>{
        const value= showperpage * counter ;
        Onpaginationchange(value - showperpage, value);
    },[counter])
  return (
    <>
        <div className='d-flex justify-content-between mx-2' style={{position:"relative",top:"-28px"}}>
        <button disabled={counter <= 1 ? true :false } className='btn btn-dark btn-sm' onClick={()=>{setCounter(counter-1)}}>Previous</button>
        <button className='btn btn-success btn-sm' disabled={showperpage * counter ==coinlimit ? true :false } onClick={()=>{setCounter(counter+1)}}>Next</button>
        </div>
    </>
  )
}

export default Pagination