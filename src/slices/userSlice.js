import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"productsInCart",
    initialState : [],
    reducers : {
        clearcartlocaldata:(state,action) =>{
            let temp = [];
            return temp;
        },
        updateCartData:(state,action)=>{
            action.payload.map((Obj) => state.push(Obj));
        },
        addProductToCart:(state,action)=>{
            const userObj = state.find((user) => user.id===action.payload.id);
            if(userObj){
                userObj.quantitySelected = Number(userObj.quantitySelected) + Number(action.payload.quantitySelected);
                userObj.subTotalCost = Number(userObj.quantitySelected)*Number(userObj.discountcost);
            }
            else{
                state.push(action.payload)
            }
        },
        removeProductFromCart:(state,action)=>{
            return state.filter((user,index) => index !== action.payload)
        },
        incrementQuantityOfProduct:(state,action)=>{
            
            const userObj = state.find((user,index) => index===action.payload);
            if(userObj){
                userObj.quantitySelected = Number(userObj.quantitySelected) + 1;
                userObj.subTotalCost = Number(userObj.quantitySelected)*Number(userObj.discountcost);
            }
        },
        decrementQuantityOfProduct:(state,action)=>{
            const userObj = state.find((user,index) => index===action.payload);
            if(userObj){
                userObj.quantitySelected = Number(userObj.quantitySelected) - 1;
                userObj.subTotalCost = Number(userObj.quantitySelected)*Number(userObj.discountcost);
            }
        }
    },
})

//export action creator function
export const {addProductToCart} = userSlice.actions;
export const {removeProductFromCart} = userSlice.actions
export const {incrementQuantityOfProduct} = userSlice.actions
export const {decrementQuantityOfProduct} = userSlice.actions
export const {updateCartData} = userSlice.actions
export const {clearcartlocaldata} = userSlice.actions
//export reducer
export default userSlice.reducer