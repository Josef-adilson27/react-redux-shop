import React from 'react';
import CartCard from './cartCard';
import EmptyCart from './EmptyCart';
import {useSelector} from 'react-redux'
import {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {getTotals} from '../redux/CartSlice'
import CartFooter from './CartFooter';

const Cart = () => {

const cart = useSelector(state=>state.cart.cartItems)
const dispatch = useDispatch()
 useEffect(()=>{
   dispatch(getTotals()) 
 },[cart,dispatch])

   

    return (   
        <div> 
         {!!cart.length && cart.map((item) =>(<CartCard key={item.id}  item={item}/>))}
         {!!cart.length && <CartFooter/>}
         {!cart.length  && <EmptyCart/>}      
        </div>  
     
    ); 
} 

export default Cart;
