import React from 'react'
import {FaIndianRupeeSign} from 'react-icons/fa6'

function OrderHistory({props}) {
  return (
    <div className='w-full  bg-gray-100 border border-dotted border-b-black px-2 opacity-70 font-thin'>
        <div className='w-full h-full flex-none items-center sm:flex sm:flex-col sm:items-start py-2  justify-between'>
            <div className='h-2/6 sm:h-full'>
                <img src={props.volumeInfo.imageLinks.smallThumbnail} alt="image" 
                className='h-full'/>
            </div>
            <div className='sm:h-full flex items-center'>
                <h3>{props.volumeInfo.title}</h3>
            </div>
            <div className=' flex items-center sm:h-full gap-1'>
                <h3>{props.saleInfo.listPrice ? props.saleInfo.listPrice.amount : "Not for sale"}</h3>
                <FaIndianRupeeSign className='text-sm text-gray-600 self-center'/>
            </div>
            <div>
                <h3>{props.orderDate}</h3>
            </div>
        </div>
        
    </div>
  )
}

export default OrderHistory