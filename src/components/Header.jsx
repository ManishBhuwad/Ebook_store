import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'

function Header() {
    
    const itemCount = useSelector(state=>(state.cart.items.length))
   
    console.log(itemCount,"item count")
  return (
    <div className='w-full h-24 headerColor shadow-sm shadow-gray-500'>
        <ul className=' h-full flex justify-center gap-10 items-center'>
            <li className='text-xs sm:text-xl'>
                <NavLink
                to="/home"
                className={({isActive})=>isActive ?"headerTextColor underline decoration-orange-600 underline-offset-4 ":"headerTextColor  hover:headerTextColor"}>
                    Home
                </NavLink>
            </li>
            <li className='text-xs sm:text-xl'>
            <NavLink
                to="/all-products"
                className={({isActive})=>isActive ?"headerTextColor underline decoration-orange-600 underline-offset-4 ":"headerTextColor  hover:headerTextColor"}>
                    All Products
                </NavLink>
            </li>
            <li className='flex h-1/2 items-center text-xs sm:text-xl'>
            <NavLink
                to="/cart"
                className={({isActive})=>isActive ?"text-orange-600":"headerTextColor hover:underline decoration-orange-600 underline-offset-4 hover:headerTextColor"}>
                    <AiOutlineShoppingCart/>
            </NavLink>
            <span  className='inline-block w-5 h-5     border-orange-600 self-start leading-none text-center text-orange-600'>
                {itemCount}
            </span>
            </li>
            
        </ul>
        
    </div>
  )
}

export default Header