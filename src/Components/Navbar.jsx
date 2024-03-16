import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css";
import logo from "../assets/logo.png";
import NavSearch from './NavSearch';
import NavExtra from './NavExtra';
import MainMenu from './MainMenu';

const Navbar = () => {
  return (
    <div className="merchantnav">

      {/* menu   */}
      <nav class="navbar">
        <Link to={"/"} class="navbar-logo"><img src={logo} alt="" style={{ width: "186px" }} /></Link>

        {/* <!--search --> */}
    <NavSearch/>
    
        <NavExtra/>
      </nav>

      <MainMenu/>
    </div>
  )
}

export default Navbar