import React, { useEffect } from 'react'
import "../Styles/ProductCard.css";
import Favorite from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const ProductCard = ({name,cost,category,image_url,id}) => {

    

  return (
    <div class="item-container">
        <div className='item-container-main'>
        <div class="main-item">
            <img src={image_url} alt=""/>
        </div>
        <p style={{marginBottom:'0', fontSize:'14px'}}>{category}</p>
        <h3 class="item-heading">
            {name}
        </h3>
        <span class="item-price">₹{cost}</span>
        <span style={{color:'#ffc000'}}><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span>
        </div>
        <button class="item-cart-btn">Add To Cart</button>
    </div>
  )
}

export default ProductCard