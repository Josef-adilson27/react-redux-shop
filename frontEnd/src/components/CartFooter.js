
import { Box, Button, Card, Typography } from '@mui/material';
import {useDispatch,useSelector} from 'react-redux'
import {clearCart } from '../redux/CartSlice';
import React from 'react';

const CartFooter = () => {
    const dispatch = useDispatch()
    const {cartTotalAmount} = useSelector(state=>state.cart)

    console.log();
    const clearHandle = ()=>{
        dispatch(clearCart())
    }

    return (
      <Box className='cart-footer'>

        <Box>
            <Button onClick={clearHandle} sx={{bgcolor:'primary.second',marginTop:'0px'}} >Очистить корзину</Button>
        </Box>

        <Card  className='cart-footer-form' sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',p:'10px'}}>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>

               <Box sx={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                  <Typography variant='h5'>Subtotal</Typography>
                  <Typography variant='h6'>$ {(cartTotalAmount).toLocaleString('ru')}</Typography>
               </Box>
                   <Typography>Налоги и доставка</Typography>
            </Box>
            
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>              
               <Button sx={{display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'primary.second'}}>Расчитать</Button>
             </Box>

        </Card>
      </Box>
    );
}

export default CartFooter;
