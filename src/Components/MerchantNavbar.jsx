import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MerchantNavbar = () => {
  return (
    <div className="merchantnav">
      <div>
        <h1>Shopping Cart.jsx</h1>
      </div>
      <div>
        <Link to={"/merchanthome/productview"}>View Product</Link>
      </div>

      <div className="account">
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
          <AccountCircleIcon></AccountCircleIcon> My Account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">MyAcoount</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Add Product</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default MerchantNavbar;
