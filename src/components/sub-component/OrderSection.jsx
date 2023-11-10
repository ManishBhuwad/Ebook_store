import React from 'react'
import { useSelector } from 'react-redux'
import OrderHistory from './OrderHistory'

function OrderSection() {

    const prevOrders = useSelector(state=>state.order.orders)


  return (
    <div className='w-full p-2'>
        {
            prevOrders.length>0?prevOrders.map((item, index)=>(
               <OrderHistory key={index} props={item}/> 
            )):<p>NO order history</p>
        }
    </div>
  )
}

export default OrderSection