import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({sendDataToLogin}) => {
const [phone, setPhone] = useState("")
const [password, setPassword] = useState("")
let navigate=useNavigate()


const handleLogin=(e)=>{
	e.preventDefault()
	
	axios.post(`http://localhost:8080/users/verify-by-phone?phone=${phone}&password=${password}`)
	.then(res=>{
	  localStorage.setItem("user",JSON.stringify(res.data.data))
	  alert("logged in successfully")
	  navigate('/userhome')
	  console.log(res.data.data);
	})
	.catch(err=>{
	  console.log("error",err);
	  alert("Invalid username or password")
	})
  }

  const sendData = () => {
    sendDataToLogin(true); // Call the parent's function with data
  };
  return (
	<>
				<form action="#" class="sign-in-form">
					<h2 class="title">Welcome, User</h2>
					<div class="input-field">
						<i class="fas fa-user"></i>
						<input type="tel" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
					</div>
					<div class="input-field">
						<i class="fas fa-lock"></i>
						<input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
					</div>
					{/* <input type="submit" value="Login" class="mybtn solid" /> */}
					<button className='mybtn' onClick={handleLogin}>Login</button>
					<div className="new-registration">
						<hr />
						<button onClick={sendData}>New Registration</button>
					</div>
					<p class="social-text">Or Sign in with social platforms</p>
					<div class="social-media">
						<a href="#" class="social-icon">
							<i class="fab fa-facebook-f"></i>
						</a>
						<a href="#" class="social-icon">
							<i class="fab fa-twitter"></i>
						</a>
						<a href="#" class="social-icon">
							<i class="fab fa-google"></i>
						</a>
						<a href="#" class="social-icon">
							<i class="fab fa-linkedin-in"></i>
						</a>
					</div>
				</form>
				
		</>
  )
}

export default Login