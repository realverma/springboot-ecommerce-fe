import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const UpdateMerchant = () => {

  const [name, setname] = useState("")
  const [id, setId] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [gst_number, setGst_number] = useState("")

  let merchant=JSON.parse(localStorage.getItem("merchant"))
  let data={id,name,email,password,phone,gst_number}

  useEffect(()=>{
    setname(merchant.name)
    setEmail(merchant.email)
    setPhone(merchant.phone)
    setPassword(merchant.password)
    setGst_number(merchant.gst_number)
    setId(merchant.id)
  },[])

  function signupmerchant(e){
    e.preventDefault()
    axios.put(`http://localhost:8080/merchants`,data)
    .then(res=>{
        console.log(res)  
        alert("update sucessfull")
        Navigate('/merchanthome')
    })
    .catch(err=>{
        console.log(err);
        alert("can not add data")
    })
}

  return (
    <div className="merchantsignup">
      <form action="" onSubmit={signupmerchant}>


        <label htmlFor="">Id</label>
        <input type="number" value={id} onChange={e=>setId(e.target.value)}/>
        <label htmlFor="">Name s</label>
        <input type="text" value={name} onChange={e=>setname(e.target.value)}/>

        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="">Phone</label>
        <input type="tel" pattern="[0-9]{10}" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <label htmlFor="">GST Number</label>
        <input type="text" value={gst_number} onChange={(e)=>setGst_number(e.target.value)}/>
        <button className="btn btn-outline-info">Update</button>
      </form>
    </div>
  )
}

export default UpdateMerchant