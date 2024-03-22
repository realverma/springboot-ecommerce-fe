import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserRegistration = ({sendDataToLogin}) => {

	const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")

    const data = {name,email,password,phone,gender}

    let navigate=useNavigate()


    function signupuser(e){
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

	const sendData = () => {
		sendDataToLogin(false);
	}
  return (
    <form action="#" class="sign-in-form">
					<h2 class="title">Register, User</h2>
					<div class="input-field">
						<i class="fas fa-user"></i>
						<input type="text" placeholder="name" value={name} onChange={e=>setname(e.target.value)} />
					</div>
					
					<div class="input-field">
						<i class="fas fa-user"></i>
						<input type="tel" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
					</div>
					<div class="input-field">
						<i class="fas fa-user"></i>
						<input type="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
					</div>
					<div class="input-field">
						<i class="fas fa-user"></i>
						<input type="text" placeholder="gender" value={gender} onChange={e=>setGender(e.target.value)} />
					</div>

					<div class="input-field">
						<i class="fas fa-lock"></i>
						<input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
					</div>
					{/* <input type="submit" value="Login" class="mybtn solid" /> */}
					<button className='mybtn' onClick={signupuser}>Register</button>
					<div className="new-registration">
						<hr />
						<button onClick={sendData}>Login</button>
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
  )
}

export default UserRegistration