import React from 'react'
import { Link } from 'react-router-dom'
import OrderStars from './OrderStars';


const OrderNowYellowCab = () => {
  const starsData = [
    {
      starIcon:' fa-star',
      description:'Open 24/7 including hollidays.'
    },
    {
      starIcon:' fa-star',
      description:'Open 24/7 including hollidays.'
    },
    {
      starIcon:' fa-star',
      description:'Open 24/7 including hollidays.'
    },
    {
      starIcon:' fa-star',
      description:'Open 24/7 including hollidays.'
    },
    {
      starIcon:' fa-star',
      description:'Open 24/7 including hollidays.'
    },
    {
      starIcon:' fa-star',
      description:'Open 24/7 including hollidays.'
    },
    {
      starIcon:' fa-star',
      description:'Open 24/7 including hollidays.'
    },
    {
      starIcon:' fa-star',
      description:'Open 24/7 including hollidays.'
    },

  ]
  return (
    <div>
        <Link to={'/'} className='flex justify-center'>
          <img  src="images/order-now.png" alt="" />   
        </Link>
        <div className='grid grid-cols-12 justify-items-center px-40'>
          <div className='col-span-6'>
            <h1 className='font-bold text-2xl'>FEATURES</h1>
            <h3 className='text-md font-semibold'>AUGUE PULVINAR AUCTOR. LOREM IPSUM DOLOR SIT</h3>
            {/* Star Icon And description Here*/}
            <OrderStars data={starsData}/>
          </div>
          <div className='col-span-6'>
          <h1 className='font-bold text-2xl '>BEST RATES TO TRENTON</h1>
          <h3 className='font-semibold text-md '>WHEELCHAIR ACCESSIBLE VEHICLE AVAILABLE</h3>
          <div>
            <img src="images/yellowcabtrenton.png" alt="" />
          </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='border-l border-orange-600 border-[4px] '></div>
          <div className='p-4 bg-orange hover:bg-black hover:text-white delay-600 ease-in-out  transition-colors'>In the event that you have lost an item in one of our cabs, please call us immidiately at 609-396-8181. The sooner we <br/> hear from you, the greater our chances of having your property returned to you quickly.</div>
          
        </div>
    </div>
  )
}

export default OrderNowYellowCab;
