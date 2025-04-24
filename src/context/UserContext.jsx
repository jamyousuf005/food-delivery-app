import React, { createContext,useState } from 'react'
import { food_items } from '../food'


export const dataContext= createContext()

const UserContext = ({children}) => {
    
 let [input, setinput] = useState("")
 let [Cate, setCate] = useState(food_items)
 let [ShowCart,setShowCart]=useState(false)
 let data={
  input,
  setinput,
  Cate,
  setCate,
  ShowCart,
  setShowCart
 } 

  return (
    <div>
         <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider>
    </div>
  )
}

export default UserContext
