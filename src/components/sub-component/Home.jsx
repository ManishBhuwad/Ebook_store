import React from 'react'
import { useGlobalContext } from '../../context/ProductContext'
import { all } from 'axios'
import Card from './Card'
import Chekout from './Chekout'

function Home() {
    const{filterBookData}=useGlobalContext()
    
  return (
    <div className='w-full'>
        <div className='w-11/12 mx-auto mt-10 grid grid-cols-4 gap-10 bg-white p-10'>
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