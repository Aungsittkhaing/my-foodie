import React from 'react'
import {RiRestaurantFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Link to='/'>
      <div className="flex items-center gap-2 my-8">
      <RiRestaurantFill className='text-3xl text-purple-500'/>
      <p className='text-xl font-bold text-gray-500'>Foodie</p>
      </div>
    </Link>
  )
}

export default Navbar