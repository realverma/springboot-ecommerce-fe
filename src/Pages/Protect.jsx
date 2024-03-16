import React from 'react'
import { Navigate } from 'react-router-dom'

const Protect = ({Child}) => {
    console.log(Child);
    let x=localStorage.getItem("merchant")
    let verify=()=>{
        if(x==null){
            return false;
        }
        else{   
            return true;
        }
    }
  return (
    <div>
        {verify()?<Child/>:<Navigate to="/merchant"/>}
    </div>
  )
}

export default Protect