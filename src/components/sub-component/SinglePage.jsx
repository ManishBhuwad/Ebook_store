import React from 'react'
import { useGlobalContext } from '../../context/ProductContext'
import { useParams } from 'react-router-dom'
import {FaIndianRupeeSign} from 'react-icons/fa6'
import { addToCart, removeItem, totalPrice} from '../../store/configSlice'
import{useDispatch, useSelector} from 'react-redux'

function SinglePage() {
    const dispatch = useDispatch()
    const params = useParams()
    const{allBookData} = useGlobalContext()
    const itemSet = useSelector(state=>(state.cart.items))

    

    const singleBook = allBookData.filter((item)=>item.id==params.id)
    const soloProduct = {...singleBook[0]}


    const isItem = itemSet.find((item)=>item.id==soloProduct.id)


    const handleAddToCart = ()=>{
        if(soloProduct.saleInfo.listPrice ){
            dispatch(addToCart({...soloProduct}))
            dispatch(totalPrice(soloProduct.saleInfo.listPrice.amount))
        }else{
            alert("cannot add this product to cart")
        }
        
    }

  return (
    <div className='min-h-screen py-10 bg-white w-10/12 mx-auto mt-10'>
        <div className='flex h-full w-8/12 mx-auto items-center gap-10 border py-4'>
            <div className='h-full w-6/12 border'>
                {
                soloProduct.volumeInfo.imageLinks ? (
                <img src={soloProduct.volumeInfo.imageLinks.thumbnail} alt='Image'
                className='h-full w-full'/>
                ):<img src='' alt='Image'/>
                }
            </div>
            <div className='flex self-start flex-col w-6/12 pl-1 pr-10'>
                {
                soloProduct.volumeInfo.categories? soloProduct.volumeInfo.categories.map((item, index)=>(
                        <p className='font-thin mt-2 text-gray-800'
                        key={index}>{item}</p>
                    ))
                    : null
                }
                <p className='text-3xl mt-4'>{soloProduct.volumeInfo.title}</p>
                <p className='font-thin mt-1'>{soloProduct.volumeInfo.subtitle}</p>
                {
                    soloProduct.saleInfo.listPrice ? (
                    <p className='mt-2 font-bold text-3xl flex items-center'><span><FaIndianRupeeSign className='text-lg'/></span><span>{soloProduct.saleInfo.listPrice.amount}</span></p>
                    ):<p className='mt-2 line-through decoration-red-600'>Not For Sale</p>
                }
                <p className='mt-2 text-gray-400'>
                    Authors 
                 {
                    soloProduct.volumeInfo.authors.map((item, index)=>(
                        <p key={index} className='text-black'>{item}</p>
                    ))
                 }
                
                </p>
                <p className='mt-2 text-gray-400'>
                    Publication :<br></br> 
                    <span className='text-black'>
                        {
                            soloProduct.volumeInfo.publisher
                        }
                    </span>
                </p>
                <p className='mt-2 text-gray-400'>
                    Published Year :<span className='text-black'> {soloProduct.volumeInfo.publishedDate} </span>
                </p>
                {
                    isItem?
                    <button 
                    onClick={(e)=>dispatch(removeItem(soloProduct.id))}
                    className='mt-10 w-60 p-2 text-thin text-blue-600 border
                    self-center
                     border-blue-600 rounded-md 
                     hover:bg-blue-600 hover:text-white'>
                        Remove from cart
                    </button>
                    :
                    <button 
                        onClick={handleAddToCart}
                        className='mt-10 w-60 p-2 text-thin text-blue-600 border
                        self-center
                        border-blue-600 rounded-md 
                        hover:bg-blue-600 hover:text-white'>
                         Add to cart
                    </button>
                }
                
                <div className=' w-full mt-10 border-t border-gray-600 text-gray-600 font-thin '>
                    {
                        soloProduct.volumeInfo.categories? soloProduct.volumeInfo.categories.map((item, index)=>(
                            <p className='font-thin mt-2 text-gray-800'key={index}>Category : {item}</p>
                        ))
                    : null
                    }
                    {
                        soloProduct.volumeInfo.maturityRating?
                           <p className='text-gray font-thin'>MaturityRating : <span className='text-sm'>{soloProduct.volumeInfo.maturityRating}</span></p>
                    : null
                    }
                    <p>Language : {soloProduct.volumeInfo.language}</p>
                </div>
            </div>
           
        </div>
        <div className='w-8/12 mx-auto mt-10 border-t border-gray-800'>
            <p className='text-xl text-gray-600'>Description</p>
            <p className='font-extralight'>
                {
                    soloProduct.volumeInfo.description
                }
            </p>
        </div>
       
    </div>
  )
}

export default SinglePage