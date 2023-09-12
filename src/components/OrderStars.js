import React from 'react'

const OrderStars = ({data}) => {
  return (
    <div>
      <div className=' gap-2'>
        {data.map((star, index ) =>
            <div  key={index} className='flex gap-4'>
            <i className={`fa ${star.starIcon} text-[10px] flex items-center text-orange-600`}></i>
                <p>{star.description}</p>
            </div>
        )}
      </div>
    </div>
  )
}

export default OrderStars
