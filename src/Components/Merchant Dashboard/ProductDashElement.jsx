import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDashElement = ({name,cost,category,image_url,id}) => {

    let navigate=useNavigate()
    

    const updateProduct = (id) => {
        navigate(`/merchanthome/updateproduct/${id}`)
    }

    const deleteProduct=(id)=>{
        axios.delete(`http://localhost:8080/products/${id}`)
        .then((res)=>{
            console.log(res)
            alert("Product deleted successfully")
        })
        .catch((err)=>{
            console.log(err)
            alert("Product not deleted")
        })
    }
  return (
    <div className="main-dash-content-product" style={{marginBottom:'5px', padding:'5px',alignItems:'baseline'}}>
      <input type="checkbox" name="" id="" style={{width:'30%'}}/>
      <div style={{ display: "flex", gap: "5px" }}>
        <div className="main-dash-content-product-image"><img style={{width:'50px'}} src={image_url} alt="" /></div>
        <div className="main-dash-content-product-name">{name}</div>
      </div>
      <div className="main-dash-content-product-price">{cost}</div>
      <div className="main-dash-content-product-price">{category}</div>
      <div className="main-dash-content-product-quantity">Quantity</div>
      <div className="main-dash-content-product-status">Status</div>
      <div className="main-dash-content-product-action">
        <button className="btn" onClick={()=>updateProduct(id)}><EditIcon/></button>
        <button className="btn" onClick={()=>deleteProduct(id)}><DeleteIcon/></button>
      </div>
    </div>
  );
};

export default ProductDashElement;
