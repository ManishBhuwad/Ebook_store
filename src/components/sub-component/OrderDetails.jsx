import React from 'react'
import {FaIndianRupeeSign} from 'react-icons/fa6'

function OrderDetails({props}) {
  return (
    <div className='w-full border-2 border-dotted border-gray-500 px-1 py-2 my-1'>
    <div className='w-full '>
            <h3 className='font-thin'>{props.volumeInfo.title}</h3>
            <div className='w-full flex justify-end gap-2'>
            <h3 className='text-end text-gray-600'>{props.saleInfo.listPrice ? props.saleInfo.listPrice.amount : "Not for sale"}</h3>
            <FaIndianRupeeSign className='self-center text-gray-600'/>
            </div>
           
    </div>
</div>
  )
}

export default OrderDetails