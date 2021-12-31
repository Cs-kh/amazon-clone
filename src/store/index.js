import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = {counter:0,items:[] , total:0};

const counterSlice = createSlice({
name:'counter',
initialState:initialState,
reducers:{
    increment(state,action){
        const newItem = action.payload;
        state.counter++;

        state.items.push({
            id:newItem.id,
            title:newItem.title,
            img:newItem.img,
            price:newItem.price,
            rating:newItem.rating,
        })

    },
    decrement(state,action){
        state.counter--;
        const id = action.payload;
        const index = state.items.findIndex((basketItems) => basketItems.id === id);
        
if (index >= 0 ) {
    state.items.splice(index,1)
    
  
}else {
    console.warn("You cant remove this items bceac");
}
    
    },
    
}
})





export const counterAction = counterSlice.actions;


const store = configureStore({
    reducer: {counter: counterSlice.reducer}
})









export default store;