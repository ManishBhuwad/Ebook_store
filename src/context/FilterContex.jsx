import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "./ProductContext";
import { filterReducer } from "../reducers/filterReducer";


const filterContext = createContext()

const initialState = {
    allfilterData:[],
    filterData: [],
    sortValue:" ",
    filters : {
        text:"NAME",
    }
}

export const FilterContextProvider = ({children}) =>{
    const[state, dispatch] = useReducer(filterReducer, initialState)
    const{allBookData} = useGlobalContext()
    const product = [...allBookData]

    useEffect(()=>{
        dispatch({type:"DATA_FROM_GLOBAL", payload:product})
    },[allBookData])

    const sorting = (e)=>{
        console.log(e.target.value)
        dispatch({type:"GET_SORT_VALUE", payload:e.target.value})
    }

    const updateFilter = (e)=>{
        let name = e.target.name;
        let value = e.target.value

        console.log(value)

        return dispatch({type:"UPDATE_FILTERS_VALUE" ,payload:{name, value}})
    }

    useEffect(()=>{
       
        dispatch({type:"SORT_PRODUCTS", payload:product})
    },[state.sortValue])

    return(
        <filterContext.Provider value={{...state, sorting, updateFilter}}>
            {children}
        </filterContext.Provider>
    )
}


export const useFilterContext = ()=>{
    return useContext(filterContext)
}

