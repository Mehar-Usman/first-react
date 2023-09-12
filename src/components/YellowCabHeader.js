import React from 'react'
import { Link } from 'react-router-dom'

const YellowCabHeader = () => {
  return (
    <div className='bg-header hidden lg:block'>
        <div className='flex justify-around'>
            <div className='flex gap-3'>
                
                <Link to={'/'} className='text-white hover:text-orange'>call(647)646-5363</Link>
                <p className='text-white'>or</p>
                <Link to={'/'} className='text-white hover:text-orange'>call(647)646-5363</Link>
                <p className='text-white'>or</p>
                <Link to={'/'} className='text-white hover:text-orange'>call(647)646-5363</Link>                
            </div>
            <div>
                <div className='flex gap-3 bg-orange h-full items-center'>
                    <Link to='/' className='text-white fa fa-twitter p-1 hover:bg-black transition-all delay-[100] ease-in-out'></Link>
                    <Link to='/' className='text-white fa fa-facebook p-1 hover:bg-black transition-all delay-[100] ease-in-out'></Link>
                    <Link to='/' className='text-white fa fa-google-plus p-1 hover:bg-black transition-all delay-[100] ease-in-out'></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YellowCabHeader
