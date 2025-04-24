import React, { useContext } from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Categories from '../../Category'
import Card from '../../components/Card'
import { food_items } from '../../food'
import { dataContext } from '../../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../../components/Card2'
import { useSelector } from 'react-redux'
import { GiInfestedMass } from 'react-icons/gi'
import { toast } from 'react-toastify'

const Home = () => {
    let { Cate, setCate, input, ShowCart, setShowCart } = useContext(dataContext)

    function filter(category) {
        if (category === 'All') {
            setCate(food_items)
        }
        else {
            let newList = food_items.filter((item) =>
                (item.food_category.toLowerCase().trim() === category.toLowerCase()))
            setCate(newList)
        }
    }

    let items = useSelector(state => state.cart)


    let subTotal = items.reduce((total, item) => total + item.qty*item.price, 0)
    let deliveryFee = 20;
    let taxes = subTotal * 0.5 / 100
    let total = Math.floor(subTotal + deliveryFee + taxes)

    return (
        <div className='w-full min-h-screen bg-slate-200'>
            <Navbar />
            {!input ? <div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
                {Categories.map((item) => {

                    return <div key={item.id} onClick={() => filter(item.name)} className='bg-white w-[140px] h-[150px] flex flex-col items-center 
           text-[17px] font-semibold  gap-5 p-5 text-gray-600 rounded-lg shadow-xl
            hover:bg-green-200 cursor-pointer transition-all duration-200'
                    >
                        {item.icon}
                        {item.name}
                    </div>
                })}
            </div>
                : null}
            <div className='flex justify-center gap-5 pt-8 pb-8 items-center flex-wrap' >
                
                {Cate.length>1?Cate.map((item) => (
                    <Card
                        name={item.food_name}
                        image={item.food_image}
                        price={item.price}
                        key={item.id}
                        id={item.id}
                        type={item.food_type} />
                )):<div className='text-2xl text-green-500 font-semibold '> No Dish Found</div>}
            </div>

            <div className={`w-full md:w-[40vw] h-[100%] flex flex-col items-center fixed top-0 right-0 bg-white shadow-xl 
        ${ShowCart ? "translate-x-0" : "translate-x-full"} p-5 transition-all duration-400 overflow-auto`}>
                <header className='text-green-500 w-[100%] text-xl flex justify-between 
        items-center'>
                
                    <span className='font-semibold'>Order Items</span>
                    <RxCross2 className='cursor-pointer w[30px] h-[30px] font-semibold
                     hover:text-gray-500 transition-all'
                        onClick={() => setShowCart(false)} />
                </header>
                {items.length>0?<>               
                 <div>
                    {items.map((item) => (
                        <Card2 key={item.id} name={item.name} price={item.price} image={item.image}
                            id={item.id} qty={item.qty} />
                    ))}
                </div>


                <div className='w-full border-t-2 border-b-2 border-gray-600 mt-7 flex flex-col gap-4 p-6'>

                    <div className='w-full flex justify-between items-center'>
                        <span className='text-lg text-gray-600 font-semibold'>Sub-Total</span>
                        <span className='text-lg text-green-500 font-semibold'>Rs{subTotal}/-</span>
                    </div>

                    <div className='w-full flex justify-between items-center'>
                        <span className='text-lg text-gray-600 font-semibold'>Delivery</span>
                        <span className='text-lg text-green-500 font-semibold'>Rs{deliveryFee}/-</span>
                    </div>

                    <div className='w-full flex justify-between items-center'>
                        <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                        <span className='text-lg text-green-500 font-semibold'>Rs{taxes}/-</span>
                    </div>

                </div>


                <div className='w-full flex justify-between items-center mt-9'>
                    <span className='text-2xl text-gray-600 font-semibold'>Total</span>
                    <span className='text-2xl text-green-500 font-semibold'>Rs{total}/-</span>
                </div>


                <button className='w-[80%]  bg-green-500 py-1 rounded-lg  text-white hover:bg-green-400 
              transition-all cursor-pointer' onClick={()=>toast.success("Order Placed")} >Place Order</button>
         
         </>:<div className='text-2xl text-green-500 font-semibold pt-5'>Cart Empty</div>}
                

        
            </div>
        </div>  
    )
}

export default Home
