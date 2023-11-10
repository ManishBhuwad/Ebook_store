import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartComp from './CartComp'
import OrderSection from './OrderSection'

function Cart() {
  const cartData = useSelector(state=>(state.cart.items))
  const totalAmount = useSelector(state=>(state.cart.total))

  return (
    <>
  
      <div className='w-11/12 mx-auto'>  
          <div className='w-full mx-auto py-4'>
              {
                cartData? cartData.map((item,index)=>(
                  <CartComp key={index} props={item}/>
                )):
                <p className='w-full bg-gray-300'>NO items Added yet</p>
              }
          </div>
        <div className=' text-end px-2'>
          <p>Total : {(totalAmount.toFixed(2))} Rs</p>
        </div>
      </div>
      <div className='w-11/12 mt-20 mx-auto border py-4'>
        <h3 className='text-center text-gray-600 underline underline-offset-2'>Your order history</h3>
              <OrderSection/>
      </div>

    </>
  )
}

export default Cart