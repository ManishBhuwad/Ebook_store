import React, { useState } from 'react'
import { useGlobalContext } from '../../context/ProductContext'
import Card from './Card'
import { useFilterContext } from '../../context/FilterContex'
import { useSelector } from 'react-redux'
import SearchComp from './SearchComp'


function AllProducts() {
    const{sorting,filterData} = useFilterContext()
    console.log("filterdata", filterData)
   const {allBookData, isLoading}= useGlobalContext()
   const productPerPage = 7
   const pageNumbers =filterData.length/productPerPage || allBookData.length/productPerPage
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

        const parent = e.target.parentNode;
        const childs = parent.querySelectorAll('.myclass')
        
        childs.forEach((child)=>{
            if(child.id==e.target.id){
                child.style.backgroundColor="red"
            }else{
               child.style.backgroundColor="blue"
            }
        })
   }  

  return (
    <div className='w-11/12 sm:w-10/12 mx-auto mt-10 bg-white'>
        <div className='w-full flex flex-col justify-between sm:flex-row gap-10 '>
            <SearchComp/>
            <div className='text-xs sm:text-sm py-1 '>
                <form action="#" >
                    <label htmlFor="sort">
                        <select name='sort' id='sort' onClick={sorting} className='border border-black'>
                            <option value="a-z"
                            className=' bg-blue-400'>a-z</option>
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
        </div>
        
        <div className='w-full p-1 gap-2 grid grid-cols-2 sm:grid-cols- md:grid-cols-4 lg:grid-cols-3 sm:gap-10 mt-10 '>
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
        <div className='mt-10 w-full flex justify-center' id='btn-parent'>
            {
                totalPages.map((item, index)=>(
                    <button key={index}
                        id={index}
                        onClick={handlePagination}
                        className={`w-10 bg-blue-600 text-white mx-1 active:bg-blue-900 myclass `}
                    >{item + 1}</button>
                ))
            }
        </div>
    </div>
  )
}

export default AllProducts