import React from 'react'
import "../Styles/ProductCard.css";
import Favorite from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
const ProductCard = () => {
  return (
    <div class="item-container">
        <div class="item-top">
            <div class="top-left-logo">
                4.5 <StarIcon/>
            </div>
            <div class="top-right-cart">
                <Favorite/>
            </div>
        </div>
        <div class="main-item">
            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/x/x/i/-original-imagupz9spjhhhtw.jpeg?q=70&crop=false" alt=""/>
        </div>
        <p style={{marginBottom:'0', fontSize:'14px'}}>Mobile</p>
        <h3 class="item-heading">
            XRay Jr Dark
        </h3>
        <span class="item-price">₹500</span>
        <button class="item-cart-btn">Add To Cart</button>
    </div>
  )
}

export default ProductCard