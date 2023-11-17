

export const filterReducer = (state, action)=>{
    switch (action.type) {
        
        case "DATA_FROM_GLOBAL":
            console.log("main",action.payload)
            return{
                filterData:action.payload,
                allfilterData:action.payload
                
            }

        case "GET_SORT_VALUE" :
            return{
                ...state,
                sortValue : action.payload
            }
        
        case "SORT_PRODUCTS":
            let sortedData=[];
            let tempData = [...action.payload]
            if(state.sortValue=="a-z"){
                sortedData = tempData.sort((a,b)=>(
                    a.volumeInfo.title.localeCompare(b.volumeInfo.title)
                ))
            }
            if(state.sortValue=="z-a"){
                sortedData = tempData.sort((a,b)=>(
                    b.volumeInfo.title.localeCompare(a.volumeInfo.title)
                ))
            }
            if(state.sortValue=="lowest"){
                let priceData = tempData.filter((item)=>item.saleInfo.listPrice?item:null)
                sortedData = priceData.sort((a,b)=>(
                    a.saleInfo.listPrice.amount -(b.saleInfo.listPrice.amount)
                ))
            }
            if(state.sortValue=="highest"){
                let priceData = tempData.filter((item)=>item.saleInfo.listPrice?item:null)
                sortedData = priceData.sort((a,b)=>(
                    b.saleInfo.listPrice.amount - (a.saleInfo.listPrice.amount)
                ))
            }
            if(state.sortValue=="newest"){
                sortedData = tempData.sort((a,b)=>(
                    new Date(b.volumeInfo.publishedDate).getFullYear()- new Date(a.volumeInfo.publishedDate).getFullYear()
                ))
            }
            if(state.sortValue=="oldest"){
                sortedData = tempData.sort((a,b)=>(
                    new Date(a.volumeInfo.publishedDate).getFullYear()- new Date(b.volumeInfo.publishedDate).getFullYear()
                ))
            }
            return{
                ...state,
                filterData : sortedData
            }
        
        case "UPDATE_FILTERS_VALUE":
            
           const {name,value} = action.payload
           console.log(name,"this is name")
           console.log(value)

            let tempFilter = state.allfilterData.filter((item)=>(
                item.volumeInfo.title.toLowerCase().includes(value)
            ))

            return{
                ...state,
                filterData: tempFilter
            }
        

        default:
           return{
            state
           }
    }

}