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
    className='w-64  hover:cursor-pointer h-96 shadow-sm shadow-gray-300 '>
        <div className='h-4/6'>
           {
            props.volumeInfo.imageLinks ?
            <img src={props.volumeInfo.imageLinks.smallThumbnail } alt='Image' 
            className='h-full w-full'/>
            :<img src='' alt='Image'/>
           }
        </div>
        <div className='w-full h-1/6'>
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
                    <p><span><FaIndianRupeeSign/></span>{props.saleInfo.listPrice.amount}</p>
                    ):<p>Not For Sale</p>
                    }
            </div>
        </div>
    </div>
  )
}

export default Card