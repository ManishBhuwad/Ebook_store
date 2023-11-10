

const reducer = (state, action)=>{

    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            }
        case "SET_API_DATA":
            const filteredBooks = action.payload.filter((item)=>item.volumeInfo.averageRating>4)
            return{
                ...state,
                isLoading: false,
                allBookData: action.payload,
                filterBookData:filteredBooks
            }
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true
            }
      
        default:
            return state;
    }
    
}

export default reducer 