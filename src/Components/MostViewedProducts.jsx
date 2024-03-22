import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

const MostViewedProducts = () => {

    const [products, setProducts] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:8080/products")
    .then((res)=>{
      setProducts(res.data.data)
      console.log(res.data.data);
    }
    )
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return(
    <div style={{display:'flex', gap:'30px', padding:'50px',flexWrap:'wrap', justifyContent:'center'}}>
    {
      products && products.length > 0 && products.slice(0, 8).map((product)=>{
        return(
          <ProductCard key={product.id} {...product}/>
        )
      })
    }
    </div>
  )}

export default MostViewedProducts