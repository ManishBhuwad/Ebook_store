import React, { useState } from 'react'
import { useGlobalContext } from '../../context/ProductContext'
import Card from './Card'
import { useFilterContext } from '../../context/FilterContex'
import { useSelector } from 'react-redux'


function AllProducts() {
    const{sorting,filterData} = useFilterContext()
    console.log("filterdata", filterData)
   const {allBookData, isLoading}= useGlobalContext()
   const productPerPage = 7
   const pageNumbers =filterData.length/productPerPage
   const totalPages=[]
   for(let i=0; i<pageNumbers; i++){
    totalPages[i]=i
   }
   console.log(pageNumbers)
   const[startPoint, setStartPoint] = useState(0)
   const[endPoint, setEndPoint] = useState(7)
  
   const handlePagination = (e)=>{          
        setStartPoint(e.target.id * 7)
        setEndPoint((e.target.id * 7) + 7) 
        console.log(startPoint, endPoint)
   }  

  return (
    <div className='w-10/12 mx-auto mt-10 bg-white'>
        <div className='w-full bg-red'>
            <form action="#">
                <label htmlFor="sort">
                    <select name='sort' id='sort' onClick={sorting}>
                        <option value="a-z">a-z</option>
                        <option value="#" disabled></option>
                        <option value="z-a">z-a</option>
                        <option value="#" disabled></option>
                        <option value="lowest">Price Low to high</option>
                        <option value="#" disabled></option>
                        <option value="highest">Price high to low</option>
                        <option value="#" disabled></option>
                        <option value="newest">Publication Date (newest)</option>
                        <option value="#" disabled></option>
                        <option value="oldest">Publication Date (oldest)</option>
                    </select>
                </label>
            </form>
        </div>
        <div className='w-full grid grid-cols-4 gap-10 p-10'>
            {
           filterData.length>0?
            filterData.map((book, index)=>{
                if(startPoint<=index && index<endPoint){
                    return  <Card key={index} props={book}/>
                } 
                return
            })
            :
            allBookData.map((book, index)=>{
                if(startPoint<=book.id && book.id<endPoint){
                    return  <Card key={index} props={book}/>
                } 
                return
            })
            }
            
        </div>
        <div className='mt-10 w-full flex justify-center'>
            {
                totalPages.map((item, index)=>(
                    <button key={index}
                        id={index}
                        onClick={handlePagination}
                        className='w-10 bg-blue-300 mx-1 active:bg-blue-900'
                    >{item + 1}</button>
                ))
            }
        </div>
    </div>
  )
}

export default AllProducts