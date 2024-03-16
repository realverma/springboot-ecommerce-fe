import React from "react";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../assets/logo.png";
import { Dropdown } from "react-bootstrap";
import "../Styles/MerchantNavbar.css";
import HomeCarousel from "../Components/HomeCarousel";

const LandingPage = () => {
  return (
    <div className="merchantnav">

      {/* menu   */}
      <nav class="navbar">
        <a href="#" class="navbar-logo">
          <img src={logo} alt="" style={{ width: "186px" }} />
        </a>

        {/* <!--search --> */}
    <label class="open-search" for="open-search">
      <i class="fas fa-search"></i>
            <input class="input-open-search" id="open-search" type="checkbox" name="menu" />
    <div class="search">
      <button class="button-search"><i class="fas fa-search"></i></button>
      <input type="text" placeholder="What are you looking for?" class="input-search"/>
    </div>
    </label>
    
        <div>
          <div
            className="nav-extra"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                <AccountCircleIcon></AccountCircleIcon> My Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/merchanthome/editmerchant">
                  Edit Account
                </Dropdown.Item>
                <Dropdown.Item href="/merchanthome/addproduct">
                  Add Product
                </Dropdown.Item>
                <Dropdown.Item href="/">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div>
              <ShoppingCartIcon />
            </div>
            <div>
              <FavoriteIcon />
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- //menu --> */}
      <nav>
        {/* <!-- // search --> */}
    
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
      </nav>
      <HomeCarousel/>
    </div>
  );
};

export default LandingPage;
