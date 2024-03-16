import React from 'react'
import MerchantNavbar from './MerchantNavbar'
import { Route, Routes } from 'react-router-dom'
import ProductView from './ProductView'
import AddProduct from './AddProduct'
import UpdateMerchant from './UpdateMerchant'



const MerchantHome = () => {


  return (
    <div>
      <MerchantNavbar/>
      <Routes>
        <Route path="/productview" element={<ProductView />} />
        <Route path="/editmerchant" element={<UpdateMerchant />} />
        <Route path="/addproduct" element={<AddProduct/>} />
      </Routes>
    </div>
  )
}

export default MerchantHome