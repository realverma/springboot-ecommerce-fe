import React from 'react'
import MerchantNavbar from './MerchantNavbar'
import { Route, Routes } from 'react-router-dom'
import ProductView from './ProductView'

const MerchantHome = () => {
  return (
    <div>
      <MerchantNavbar/>
      <Routes>
        <Route path="/productview" element={<ProductView />} />
      </Routes>
    </div>
  )
}

export default MerchantHome