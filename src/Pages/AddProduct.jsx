import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = () => {

    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [image_url, setImage] = useState("")
    const [cost, setPrice] = useState("")


    let data={name,brand,category,description,image_url,cost}
    let mymerchant=localStorage.getItem("merchant")
    let id=JSON.parse(mymerchant).id

    function addProduct(e){
        e.preventDefault()
        axios.post(`http://localhost:8080/products/${id}`,data)
        .then(res=>{
            console.log(res)
            alert("Product Addedd sucessfull")
        })
        .catch(err=>{
            console.log(err);
            alert("You are not a merchant")
        })
    }
  return (
    <div className='merchantsignup'>
        <form action="" onSubmit={addProduct}>
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder="Enter Product Name" name="name" id="name" onChange={e=>setName(e.target.value)} required value={name}/>
            <label htmlFor="">Brand</label>
            <input type="text" placeholder="Enter Product Brand" name="brand" id="brand" onChange={e=>setBrand(e.target.value)} value={brand} required/>
            <label htmlFor="">Category</label>
            <input type="text" placeholder="Enter Product Category" name="category" id="category" onChange={e=>setCategory(e.target.value)} value={category} required/>
            <label htmlFor="">Description</label>
            <input type="text" placeholder="Enter Product Description" name="description" id="description" onChange={e=>setDescription(e.target.value)} value={description} required/>
            <label htmlFor="">Image URL</label>
            <input type="text" placeholder="Enter Product Image" name="image" id="image" onChange={e=>setImage(e.target.value)} value={image_url} required/>
            <label htmlFor="">Price</label>
            <input type="number" placeholder="Enter Product Price" name="price" id="price" onChange={e=>setPrice(e.target.value)} value={cost} required/>
            <button className='btn btn-success'>Add product</button>
        </form>
    </div>
  )
}

export default AddProduct