import React from 'react'
import Sidebar from '../Components/Merchant Dashboard/Sidebar'
import MainDash from '../Components/Merchant Dashboard/MainDash'
import '../Styles/Merchant Dashboard Styles/MerchantDashboard.css'

const MerchantDashboard = ({id}) => {
  return (
    <div className='merchant-dashboard'>
        <Sidebar/>
        <MainDash id={id}/>
    </div>
  )
}

export default MerchantDashboard