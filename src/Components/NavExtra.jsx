import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"

const NavExtra = () => {

  let x=localStorage.getItem("merchant")
    let verify=()=>{
        if(x==null){
            return false;
        }
        else{   
            return true;
        }
    }
  return (
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
            {
              !verify()?<div>
              <button className="glow-on-hover">
                <Link to={"/merchant"}><AccountCircleIcon/> Login/Register</Link>
              </button>
            </div>:
            
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
}

            <div>
              <ShoppingCartIcon />
            </div>
            <div>
              <FavoriteIcon />
            </div>
          </div>
        </div>
  )
}

export default NavExtra