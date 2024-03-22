import React from 'react'
import MerchantNavbar from './MerchantNavbar'
import { Route, Routes } from 'react-router-dom'
import ProductView from './ProductView'
import AddProduct from './AddProduct'
import UpdateMerchant from './UpdateMerchant'
import UpdateProduct from './UpdateProduct'
import MerchantDashboard from './MerchantDashboard'



const MerchantHome = () => {
  let merchant=JSON.parse(localStorage.getItem("merchant"))
  let id=merchant.id

  return (
    <div>
      <MerchantNavbar/>
      <Routes>
        <Route path="/productview" element={<ProductView />} />
        <Route path="/editmerchant" element={<UpdateMerchant />} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/updateproduct/:id" element={<UpdateProduct/>} />
        <Route path="/mdashboard/" element={<MerchantDashboard id={id}/>} />
      </Routes>
    </div>
  )
}

export default MerchantHome