import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'

function Header() {
    
    const itemCount = useSelector(state=>(state.cart.items.length))
   
    console.log(itemCount,"item count")
  return (
    <div className='w-full h-24 bg-white'>
        <ul className=' h-full flex justify-center gap-10 items-center'>
            <li>
                <NavLink
                to="/home"
                className={({isActive})=>isActive ?"text-black":"text-gray-600 hover:text-black"}>
                    Home
                </NavLink>
            </li>
            <li>
            <NavLink
                to="/all-products"
                className={({isActive})=>isActive ?"text-black":"text-gray-600 hover:text-black"}>
                    All Products
                </NavLink>
            </li>
            <li className='flex h-1/2 items-center'>
            <NavLink
                to="/cart"
                className={({isActive})=>isActive ?"text-black":"text-gray-600 hover:text-black"}>
                    <AiOutlineShoppingCart/>
            </NavLink>
            <span  className='inline-block w-5 h-5 rounded-full border border-orange-600 self-start leading-none text-center text-orange-600'>
                {itemCount}
            </span>
            </li>
            
        </ul>
        
    </div>
  )
}

export default Header