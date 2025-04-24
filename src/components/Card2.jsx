    import React, { useContext } from 'react'
import image1 from "../imgAssets/image1.avif"

import { IoTrashBin } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/CartSlice';
import { toast } from 'react-toastify';


function Card2({name,id,price,image,qty}) {

    let dispatch = useDispatch()

    return (
        <div className='w-full h-[120px] p-2 shadow-lg mt-2 flex justify-between'>

            <div className='w-[60%] h-full flex gap-5 '>
                <div className='w-[50%] h-full overflow-hidden rounded-lg'>
                    <img className='object-cover' src={image} alt="" />
                </div>
                <div className='w-[40%] h-full flex flex-col gap-3'>
                    <div className='text-lg font-semibold'>{name}</div>
                    <div className='w-[100px] h-[50px] flex overflow-hidden rounded-lg shadow-lg text-green-500
              font-semibold border-1 border-green-400'>

                    <button onClick={ 
                        ()=>{qty>1?dispatch(DecrementQty(id)):1}
                    } className='bg-white w-[30px] h-full text-xl flex justify-center 
                    items-center cursor-pointer hover:bg-gray-200 transition-all'>-</button> 
                 <span className='w-[40px] h-full text-xl flex justify-center 
                items-center bg-slate-200'>{qty}</span>
                        <button onClick={()=>dispatch(IncrementQty(id))} className='bg-white w-[30px] h-full text-xl flex justify-center
                 items-center cursor-pointer hover:bg-gray-200 transition-all' >+</button>
                    </div>
                </div>
            </div>


            <div className='text-green-500 font-semibold flex flex-col gap-6 items-end '>
                <span className='text-xl'>{price}/-</span>
                <IoTrashBin className=' text-red-500 w-[25px] h-[25px] cursor-pointer'
                 onClick={()=>
                     
                    {dispatch(RemoveItem(id))
                     toast.error('Item removed')
                    }
                  } />

            </div>

        </div>
    )
}

export default Card2