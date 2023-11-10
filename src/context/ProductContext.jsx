import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/reducer'



const AppContext =  createContext()

const initialState = {
    isLoading:false,
    isError: false,
    allBookData:[],
    filterBookData:[]
}
   

const AppContextProvider = ({children})=>{
    const[state, dispatch] = useReducer(reducer, initialState)

    const API = "https://d1krvzwx5oquy1.cloudfront.net/books.json"

    const apiRequestHandler = async(url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const data = await axios.get(url)
            const allProductData = data.data
            dispatch({type:"SET_API_DATA", payload:allProductData})
        } catch (error) {
            dispatch({type:"API_ERROR"})
            console.log(error)
        }
    }
    
    useEffect(()=>{
        apiRequestHandler(API)
    },[])

    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}


export {AppContextProvider}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}   