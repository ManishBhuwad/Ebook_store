import{createSlice} from'@reduxjs/toolkit'


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        total:0
    },
    reducers:{
        addToCart:(state, action)=>{
            console.log(action.payload)
            const itemInCart = state.items.find((item)=>item.id==action.payload.id)
            if(!itemInCart){
                state.items.push(action.payload)
            }
        },

        removeItem : (state, action)=>{
            state.items = state.items.filter((item)=>item.id!==action.payload.id)
            state.total = state.total-action.payload.saleInfo.listPrice.amount
            
        },
        
        totalPrice:(state, action)=>{
            console.log("payloadaction",action.payload)
            state.total = state.total+action.payload
        }
    }
})

export const{addToCart, removeItem,totalPrice} = cartSlice.actions;
export default cartSlice.reducer;