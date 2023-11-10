import { createSlice } from "@reduxjs/toolkit";




const orderSlice = createSlice({
    name:"order",
    initialState:{
        orders:[
        ],
        // orderSummery:{
        //         userdetails:{},
        //         product:{},
        //         orderDate: "2023-11-1"
        // },
        
    },
    reducers:{
        addOrder:(state, actions)=>{
            state.orders.push(actions.payload)
        },  

       

    }
})

export const{addOrder, removeOrder} = orderSlice.actions;
export default orderSlice.reducer;