import React, { useState } from "react";
import '../Styles/MerchantSignUp.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MerchantSignup = () => {

    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [gst_number, setGst_number] = useState("")

    const data = {name,email,password,phone,gst_number}

    let navigate=useNavigate()


    function signupmerchant(e){
        e.preventDefault()
        axios.post(`http://localhost:8080/merchants`,data)
        .then(res=>{
            console.log(res)
            alert("Signup sucessfull")
            navigate('/merchanthome')
        })
        .catch(err=>{
            console.log(err);
            alert("Data Not Found")
        })
    }
  return (
    <div className="merchantsignup">
      <form action="" onSubmit={signupmerchant}>
        <h4>Enter Your Details</h4>
        <div></div>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={e=>setname(e.target.value)}/>

        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="">Phone</label>
        <input type="tel" pattern="[0-9]{10}" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <label htmlFor="">GST Number</label>
        <input type="text" value={gst_number} onChange={(e)=>setGst_number(e.target.value)}/>
        <button className="btn btn-outline-info">Signup</button>
      </form>
    </div>
  );
};

export default MerchantSignup;
