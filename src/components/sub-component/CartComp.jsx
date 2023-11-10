import React from 'react'
import { removeItem } from '../../store/configSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {ImCross} from 'react-icons/im'
import OrderSection from './OrderSection'

function CartComp({props}) {
    const navigate = useNavigate()
    console.log(props.id)
    const dispatch = useDispatch()

    const handleBuy = ()=>{
        navigate(`checkout/${props.id}`)
    }
  return (
    <div className='w-full h-36 sm:h-24 bg-gray-200 border border-dotted border-b-black px-2'>
        <div className='w-full h-full flex-none sm:flex items-center py-2  justify-between'>
            <div className='h-2/6 sm:h-full'>
                <img src={props.volumeInfo.imageLinks.smallThumbnail} alt="image" 
                className='h-full'/>
            </div>
            <div className='sm:h-full justify-between flex items-center'>
                <h3>Name:</h3>
                <h3>{props.volumeInfo.title}</h3>
            </div>
            <div className='justify-between  flex items-center sm:h-full'>
                <h3>price:</h3>
                <h3>{props.saleInfo.listPrice ? props.saleInfo.listPrice.amount : "Not for sale"}</h3>
            </div>
            <div className='flex gap-5'>
                <button onClick={handleBuy}
                className='w-16 px-1 py-0 sm:px-2 sm:py-1 bg-orange-600 rounded-md '>
                    Buy
                </button>
                <button onClick={()=>dispatch(removeItem(props))}
                className='px-1 py-0 sm:px-2 sm:py-1 bg-orange-600 rounded-md'>
                   <ImCross/>
                </button>
            </div>
        </div>
        <br />
     
        
    </div>
  )
}

export default CartComp