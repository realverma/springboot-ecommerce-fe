import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const UserSignUp = () => {

    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")

    const data = {name,email,password,phone,gender}

    let navigate=useNavigate()


    function signupmerchant(e){
        e.preventDefault()
        axios.post(`http://localhost:8080/users`,data)
        .then(res=>{
            console.log(res)
            alert("Signup sucessfull")
            navigate('/userhome')
        })
        .catch(err=>{
            console.log(err);
            alert("Data Not Found")
        })
    }
  return (
    <div className="merchantsignup">
      <form action="" onSubmit={signupmerchant}>


        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={e=>setname(e.target.value)}/>

        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="">Phone</label>
        <input type="tel" pattern="[0-9]{10}" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

        <label htmlFor="">Gender</label>
        <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn btn-outline-info">Signup</button>
      </form>



      
    </div>
  )
}

export default UserSignUp