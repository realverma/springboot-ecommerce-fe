import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
// import '../Styles/MerchantSignup.css'

const Merchant = () => {
  const [phone, setphone] = useState("")
  const [password, setpassword] = useState("")
  let navigate=useNavigate()

  function verifyMerchant(e){
    e.preventDefault()
    axios.post(`http://localhost:8080/merchants/verify-by-phone?phone=${phone}&password=${password}`)
    .then(res=>{
      localStorage.setItem("merchant",JSON.stringify(res.data.data))
      alert("logged in successfully")
      navigate('/merchanthome')
    })
    .catch(err=>{
      console.log("Wrr",err);
      alert("Invalid username or password")
    })
  }
  return (
    <div>
      <Form className='merchant-login'>
        <h3>Merchant</h3>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="tel" value={phone} onChange={e=>setphone(e.target.value)} placeholder="Enter phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={e=>setpassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <button className='btn btn-success mx-5' onClick={verifyMerchant}>Sign In</button>
        <button className='btn btn-danger mx-5'><Link to={'/merchantsignup'}>Sign Up</Link></button>
      </Form.Group>
    </Form>
    </div>
  )
}

export default Merchant