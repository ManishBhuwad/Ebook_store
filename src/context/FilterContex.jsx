import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "./ProductContext";
import { filterReducer } from "../reducers/filterReducer";


const filterContext = createContext()

const initialState = {
    filterData: [],
    sortValue:" "
}

export const FilterContextProvider = ({children}) =>{
    const[state, dispatch] = useReducer(filterReducer, initialState)
    const{allBookData} = useGlobalContext()
    const product = [...allBookData]

    useEffect(()=>{
        dispatch({type:"DATA_FROM_GLOBAL", payload:product})
    },[])

    const sorting = (e)=>{
        console.log(e.target.value)
        dispatch({type:"GET_SORT_VALUE", payload:e.target.value})
    }

    useEffect(()=>{
        dispatch({type:"SORT_PRODUCTS", payload:product})
    },[state.sortValue])

    return(
        <filterContext.Provider value={{...state, sorting}}>
            {children}
        </filterContext.Provider>
    )
}


export const useFilterContext = ()=>{
    return useContext(filterContext)
}

