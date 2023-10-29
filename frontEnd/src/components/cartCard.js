import React from 'react';
import {useDispatch} from 'react-redux'
import { removeFromCart,decrease,increase} from '../redux/CartSlice';
import Button        from         '@mui/material/Button';
import Box           from         '@mui/material/Box';
import Card          from         '@mui/material/Card';
import CardMedia     from         '@mui/material/CardMedia';
import AddIcon       from         '@mui/icons-material/Add';
import RemoveIcon    from         '@mui/icons-material/Remove';
import Typography    from         '@mui/material/Typography';
import IconButton    from         '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const CartCard = ({item}) => {

    const dispatch = useDispatch()

    const decreaseHandle = (id)=>{
        dispatch(decrease(id))
    }

    const increaseHandle = (id)=>{
        dispatch(increase(id))
    }
    const removeHandle = (id)=>{
        dispatch(removeFromCart(id))
    }
    
console.log('da');
    return (
        <div>
              <Card className='cart-cards-container'>
          
                    <Box  className='cart-cards_element'>
                     <CardMedia className='cart-card-picture' image={item.image}/>
                      <Box className='cart-card-description'>
                         <Typography variant='h4'>{item.name}</Typography>
                         <Typography variant='h5' >{item.desc}</Typography>

                         <IconButton onClick={()=>{removeHandle(item)}} aria-label="delete" size="large">
                           <DeleteIcon fontSize="inherit" />
                         </IconButton>
                      </Box>
                    </Box>

                    <Typography className='cart-cards_price'>$ {item.price}</Typography>
                    
                    <Box  className='cart-cards_counter'> 

                        <Box className='counter-style'>
                          <Button onClick={()=>{increaseHandle(item)}} sx={{bgcolor:'primary.second'}} size='small'><AddIcon/></Button>
                          <Typography>{item.cartQuantity}</Typography>
                          <Button onClick={()=>{decreaseHandle(item)}} sx={{bgcolor:'primary.second'}} size='small'><RemoveIcon/></Button>
                        </Box>
       
                    </Box>

                    <Typography className='cart-cards_total'> $ {(item.cartQuantity * item.price).toLocaleString('ru')}</Typography>
                
            </Card>  
         
        </div>
    );
}

export default CartCard;
