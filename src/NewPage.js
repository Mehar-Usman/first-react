import React from 'react'
import Crud from './components/Crud'
import { Link } from 'react-router-dom'

const newPage = () => {
    const startNewpage = 'add new page'
  return (
    <div>
      <div className='text-4xl font-extrabold text-center text-orange-500 uppercase'>{startNewpage}</div>
    <Crud/><br/>
      <Link to='/'>Another page</Link>
    </div>
  )
}

export default newPage
