import React from 'react'
import { useFilterContext } from '../../context/FilterContex'

function SearchComp() {
    const{fiters:text,updateFilter} = useFilterContext()
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()} >
            <input type="text" name='text' value={text} onChange={updateFilter}
            placeholder='search '  
            className= ' border border-black rounded-md pl-1'/>
        </form>
    </div>
  )
}

export default SearchComp