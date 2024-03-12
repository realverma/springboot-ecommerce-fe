import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landing-page' style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'20px'}}>
        <Link to={'/user'} style={{textAlign:'center'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s" alt="" /><br/>User</Link><br />
        <Link to={'/merchant'} style={{textAlign:'center'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGzQ5uZu-ZpBqI3cRUmA6yR2_6D2NwcLth0w&usqp=CAU" alt="" /><br/>Merchant</Link>
    </div>
  )
}

export default LandingPage