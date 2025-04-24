import React from 'react'
import image from '../imgAssets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/CartSlice';
import { toast } from 'react-toastify';



const Card = ({ name, image, id, price, type }) => {

  let dispatch = useDispatch()
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg 
    hover:border-1 border-green-300 transition-all  '>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg' >
        <img src={image} alt="" className='object-cover' />
      </div>
      <div className='text-2xl font-semibold'>
        {name}
      </div>

      <div className='w-full flex justify-between items-center'>
        <div className='text-lg text-green-500 font-semibold'>Rs {price}/-</div>
        <div className='text-green-500 text-lg font-semibold flex items-center gap-1 '>
          {type === 'veg' ? <LuLeafyGreen /> : <GiChickenOven />}  <span>{type}</span>
        </div>
      </div>
      <button className='bg-green-500 py-1 rounded-lg  text-white hover:bg-green-400 
transition-all cursor-pointer' onClick={() => {dispatch(AddItem({ id: id , name: name 
        ,  image: image ,  price: price ,  qty: 1, key:id})) 
        toast.success('Item Added') }} >Add To Dish </button>
    </div>
  ) 
}

export default Card
