import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'

const ProductView = () => {

const [products, setProducts] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:8080/products")
    .then((res)=>{
      setProducts(res.data.data)
    }
    )
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <h5>Products</h5>
      <div style={{display:'flex', gap:'5px', padding:'50px'}}>
      {
        products && products.map((product)=>{
          return(
            <div key={product.id} style={{border:'1px solid black', padding:'5px', width:'650px'}}>
              <h5>{product.name}</h5>
              <p>{product.brand}</p>
              <p>{product.category}</p>
              <p>{product.description}</p>
              <p>{product.cost}</p>
              <img src={product.image_url} alt=""/>
              <button className='btn btn-success'>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </div>
          )
        })
      }
      </div>

      <SingleProduct/>
    </div>
  )
}

export default ProductView