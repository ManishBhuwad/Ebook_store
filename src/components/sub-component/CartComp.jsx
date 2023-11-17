import React from 'react'
import { removeItem } from '../../store/configSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {ImCross} from 'react-icons/im'
import {FaIndianRupeeSign} from 'react-icons/fa6'
import OrderSection from './OrderSection'

function CartComp({props}) {
    const navigate = useNavigate()
    console.log(props.id)
    const dispatch = useDispatch()

    const handleBuy = ()=>{
        navigate(`checkout/${props.id}`)
    }
  return (
    <div className='w-full h-36 border border-dotted border-b-black px-2 font-thin text-xs md:text-lg'>
        <div className='w-full h-full flex py-2 gap-4'>
            <div className='w-3/12 md:w-2/12 h-full'>
                <img src={props.volumeInfo.imageLinks.smallThumbnail} alt="image" 
                className='h-full'/>
            </div>
            <div className='w-9/12 md:w-10/12 flex flex-col justify-between'>
                <div className=''>
                    <h3 className='font-bold'>{props.volumeInfo.title}</h3>
                </div>
                <div className='flex  items-center gap-1 sm:h-full font-semibold'>
                    <h3 className=''>{props.saleInfo.listPrice ? props.saleInfo.listPrice.amount : "Not for sale"}</h3>
                    <FaIndianRupeeSign />
                </div>
                <div className='flex justify-between'>
                    <button onClick={handleBuy}
                    className='w-16 px-1 py-1 sm:px-2 sm:py-1 bg-orange-600 rounded-md '>
                        Buy
                    </button>
                    <button onClick={()=>dispatch(removeItem(props))}
                    className='px-1 py-1 sm:px-2 sm:py-1 bg-orange-600 rounded-md text-xs sm:text-sm'>
                    <ImCross className='text-white'/>
                    </button>
                </div>
            </div>
            
        </div>
        <br />
     
        
    </div>
  )
}

export default CartComp