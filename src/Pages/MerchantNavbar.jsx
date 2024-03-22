import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../Styles/MerchantNavbar.css";
import logo from '../assets/logo.png'

const MerchantNavbar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <div className="merchantnav">

      {/* menu   */}
      <nav class="navbar">
      <Link to={"/"} class="navbar-logo"
        ><img src={logo} alt="" style={{width:'186px'}}/></Link>
      <ul class="navbar-links">
        <li class="navbar-dropdown">
          <Link to={"/merchanthome/productview"}>All Products</Link>
          <div class="dropdown">
            <a href="#">Tomato Soup</a>
            <a href="#">Veg Manchow Soup</a>
            <a href="#">Veg Hot Soup</a>
          </div>
        </li>
        <li class="navbar-dropdown">
          <a href="#">Sweets</a>
          <div class="dropdown">
            <a href="#">Ladoo</a>
            <a href="#">Besan Ladoo</a>
            <a href="#">Ghee Besan Ladoo</a>
            <a href="#">Nariyal Ladoo</a>
            <a href="#">Kaju Katli</a>
            <a href="#">Rasgulla</a>
          </div>
        </li>
        <li class="navbar-dropdown">
          <a href="#">Breads</a>
          <div class="dropdown">
            <a href="#">Lachha Paratha</a>
            <a href="#">Rumali Roti</a>
            <a href="#">Tandoori Roti</a>
            <a href="#">Butter Roti</a>
            <a href="#">Plain Naan</a>
            <a href="#">Butter Naan</a>
          </div>
        </li>
        <li class="navbar-dropdown">
          <a href="#">Rice</a>
          <div class="dropdown">
            <a href="#">Plain Rice</a>
            <a href="#">Veg Pulao</a>
            <a href="#">Veg Biryani</a>
            <a href="#">Paneer Biryani</a>
            <a href="#">Lemon Rice</a>
            <a href="#">Veg Kashmiri Pulao</a>
          </div>
        </li>
        <li class="navbar-dropdown">
          <a href="#">Chinese</a>
          <div class="dropdown">
            <a href="#">Paneer Chill Dry</a>
            <a href="#">Paneer Garlic</a>
            <a href="#">Veg Garlic</a>
            <a href="#">Veg Chilli</a>
          </div>
        </li>
      </ul>
      <div style={{display:'flex', alignItems:'center',justifyContent:'center', gap:'5px'}}>
      <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
          <AccountCircleIcon></AccountCircleIcon> My Account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/merchanthome/dashboard">Dashboard</Dropdown.Item>
            <Dropdown.Item href="/merchanthome/editmerchant">Edit Account</Dropdown.Item>
            <Dropdown.Item href="/merchanthome/addproduct">Add Product</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
    </div>
  );
};

export default MerchantNavbar;
