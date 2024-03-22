import React, { useEffect, useState } from 'react'
import ProductDashElement from './ProductDashElement'
import axios from 'axios'

const MainDash = ({id}) => {

    const [merchantProducts, setMerchantProducts] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:8080/products/m/${id}`)
        .then((res)=>{
            console.log(res.data.data)
            setMerchantProducts(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div className='main-dash'>
        <div className="main-dash-searchbar">Search</div>
        <div className="main-dash-content">
            <div className="main-dash-content-products">
                {/* <ProductDashElement /> */}
                {
                    merchantProducts && merchantProducts.map((product)=>{
                        return(
                            <ProductDashElement key={product.id} {...product}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MainDash