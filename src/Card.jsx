import React from 'react'
import {BsFillEyeFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
const Card = ({meal}) => {
  return (
    <div className='w-64 border flex justify-center items-center flex-col p-5 rounded-xl gap-5 
    relative h-[400px] shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl'>
        <img src={meal.strMealThumb} alt="" className='rounded-xl' width={'200px'} />
        <h2>{meal.strMeal}</h2>
        <button className='text-white bg-blue-500 px-10 py-2 absolute rounded-xl bottom-3'>
        <Link to={`/detail/${meal.idMeal}`}>
            <BsFillEyeFill className='text-2xl'/>
        </Link>
        </button>
    </div>
  )
}

export default Card