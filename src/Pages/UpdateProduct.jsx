import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {
    

    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [image_url, setImage] = useState("")
    const [cost, setPrice] = useState("")

    let param=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${param.id}`)
        .then((res)=>{
            let {name,brand,category,description,image_url,cost}=res.data.data
            setName(name)
            setBrand(brand)
            setCategory(category)
            setDescription(description)
            setImage(image_url)
            setPrice(cost)
        })
    },[])

    let data={name,brand,category,description,image_url,cost}

    function updateproduct(e){
        e.preventDefault()
        axios.put(`http://localhost:8080/products/${param.id}`,data)
        .then(res=>{
            console.log(res)
            alert("Product Updated sucessfull")
        })
        .catch(err=>{
            console.log(err);
            alert("You are not a merchant")
        })
    }
  return (
    <div className='merchantsignup'>
        <form action="" onSubmit={updateproduct}>
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
            <button className='btn btn-success'>Update product</button>
        </form>
    </div>
  )
}

export default UpdateProduct