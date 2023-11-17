import React from 'react'
import { useGlobalContext } from '../../context/ProductContext'
import { all } from 'axios'
import Card from './Card'
import Chekout from './Chekout'

function Home() {
    const{filterBookData}=useGlobalContext()
    
  return (
    <div className='w-11/12 mx-auto mt-10'>
        <div className='w-full p-1 gap-1 grid grid-cols-2 sm:grid-cols- md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 sm:gap-10'>
         {   
            filterBookData ?( filterBookData.map((item, index)=>(
                <Card key={index} props={item}/>
            
            ))):<p>not a data</p>
         }
        </div>

       
    </div>
  )
}

export default Home