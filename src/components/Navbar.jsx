    import React, { useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext } from 'react';
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';


const Navbar = () => {

    let {input,setinput,Cate,setCate,ShowCart,setShowCart}=useContext(dataContext)
    useEffect(()=>{
       let newList=food_items.filter((item)=>  item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input) )
       setCate(newList)
    },[input])
    
    let items = useSelector(state=>state.cart)

    return (
    <>   
     <div className='w-full h-[100px] flex justify-between items-center px-3 md:px-8 '>

     <div className='w-[50px] h-[50px] bg-white flex justify-center items-center
       rounded shadow-xl '>
        <MdFastfood className='w-[30px] h-[30px] text-green-500' />
     </div>

     <form onSubmit={(e)=>e.preventDefault()} className='w-[60%] h-[50%] bg-white 
     flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'>
     <IoSearch className='text-green-500 w-[20px] h-[20px]  ' />
     <input type="text" onChange={(e)=>setinput(e.target.value)} value={input}
      placeholder='search items..' className='w-[100%] outline-none text-20px' />
     </form>

     <div className='w-[50px] h-[50px] bg-white flex justify-center items-center 
     rounded shadow-xl relative cursor-pointer   ' onClick={()=>setShowCart(true)}>
        <span className='absolute top-0 right-0.5   text-green-500  font-semibold ' >{items.length}</span>
        <LuShoppingBag className='w-[30px] h-[30px] text-green-500'  />
     </div>

</div>
</>

  )
}

export default Navbar
