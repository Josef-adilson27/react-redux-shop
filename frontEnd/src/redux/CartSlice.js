import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState ={
    cartItems: localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems"))
    :[],

    cartTotalQuantity:0,
    cartTotalAmount:0
}
 
 const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
        // находим нажатую карточку
        const itemIndex = state.cartItems.findIndex(item=>(
         item.id === action.payload.id
        ))

        //если товар есть в корзине (в cartItems) задаем новое свойство(cartQuantity) элементу и инкриментируем его как колличество
        if(itemIndex >= 0)
        {
            state.cartItems[itemIndex].cartQuantity +=1

            // сообщение при повторном добавлении
            toast.info(`${action.payload.name} добавлен в корзину повторно (${state.cartItems[itemIndex].cartQuantity})`,{
                position:'bottom-left'
            })
        }
        //если такого товара нет, то добавляем в корзину (в cartItems)
        else
        {
            state.cartItems.push({...action.payload,cartQuantity:1})
            // сообщение при первом добавлении
            toast.info(` ${action.payload.name} добавлен в корзину`,{
                position:'bottom-left'
            })
        }

        localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        removeFromCart:(state,action)=>{
            
           state.cartItems = state.cartItems.filter(item=>item.id!==action.payload.id)
              

            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

            toast.error(`${action.payload.name}удален с корзины`,{
                position:'bottom-left'
            })     
        },
        decrease:(state,action)=>{
            const itemIndex = state.cartItems.findIndex(item=>(
                item.id === action.payload.id
               ))

               if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity-=1 
               }
               else if(state.cartItems[itemIndex].cartQuantity===1){
                state.cartItems = state.cartItems.filter(item=>item.id!==action.payload.id)
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
               }
        },
        increase:(state,action)=>{
            const itemIndex = state.cartItems.findIndex(item=>(
                item.id === action.payload.id
               ))
               state.cartItems[itemIndex].cartQuantity+=1 
               localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        clearCart:(state,action)=>{
            state.cartItems = []
            toast.info('Корзина была полностью очищена',{
                position:'bottom-left'
            })
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        getTotals(state,action){
          let {total,quantity} = state.cartItems.reduce((cartTotal,cartItems)=>{
                const {price,cartQuantity} = cartItems
                cartTotal.total    += price * cartQuantity
                cartTotal.quantity += cartQuantity
                 
                return cartTotal
            },{
                total:0,
                quantity:0
            }) 
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    }
})
   
export const {addToCart,removeFromCart,decrease,increase,clearCart,getTotals} = cartSlice.actions

export default cartSlice.reducer