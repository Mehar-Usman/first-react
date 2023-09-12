import React from 'react'
import YellowCabNavbar from './components/YellowCabNavbar'
import YellowCabHeader from './components/YellowCabHeader'
import YellowCabSlider from './components/YellowCabSlider'
import WelcomeYellowCab from './components/WelcomeYellowCab'
import OrderNowYellowCab from './components/OrderNowYellowCab'
const YellowCab = () => {
  return (
    <>
       <YellowCabHeader/> 
      <YellowCabNavbar/>
      <YellowCabSlider/>
    <WelcomeYellowCab/>
    <OrderNowYellowCab/>
    </>
  )
}

export default YellowCab;
