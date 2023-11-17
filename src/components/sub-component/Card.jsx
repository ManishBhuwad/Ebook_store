import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaIndianRupeeSign} from 'react-icons/fa6'


function Card({props}) {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(`/single-page/${props.id}`)
    }
  return (
    <div 
    onClick={handleClick}
    className='w-36 p-1 h-48 text-sm lg:text-md lg:w-64 lg:h-96  hover:cursor-pointer  shadow-md shadow-gray-300 border  '>
        <div className=' h-3/6 lg:h-4/6 p-1 saturate-200'>
           {
            props.volumeInfo.imageLinks ?
            <img src={props.volumeInfo.imageLinks.smallThumbnail } alt='Image' 
            className='h-full w-full shadow-sm shadow-gray-500 '/>
            :<img src='' alt='Image'/>
           }
        </div>
        <div className='w-full h-3/6 text-xs flex flex-col lg:text-sm  sm:justify-around lg:h-2/6 '>
            {
                props.volumeInfo.categories? props.volumeInfo.categories.map((item, index)=>(
                        <p className='font-thin text-gray-800'
                        key={index}>{item}</p>
                    ))
                    : null
            }
            <div>
                <p>{props.volumeInfo.title}</p>
            </div>
            <div>
                {
                    props.saleInfo.listPrice ? (
                    <div className='flex gap-1 items-center'>
                        <p>{props.saleInfo.listPrice.amount}</p>
                        <span><FaIndianRupeeSign className='font-thin'/></span>
                    </div>
                    ):<p>Not For Sale</p>
                    }
            </div>
        </div>
    </div>
  )
}

export default Card