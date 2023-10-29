import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addToCart } from '../redux/CartSlice';
import { useDispatch} from 'react-redux';


 
const ProductsCard = ({item}) => {
  
  const dispatch = useDispatch()
  
  const addItem = (product)=>{
    dispatch(addToCart(product))
  }
  
  return (

      <Card className='main-card'>
          
        <CardMedia className='card-picture' image={item.image}/>

        <CardContent>
          <Typography gutterBottom variant="h5">{item.name}</Typography>
          <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
          <Typography variant="body2" color="text.secondary">$ {item.price}</Typography>
        </CardContent>

        <CardActions>
          <Button sx={{bgcolor:'primary.second'}} onClick={()=>{addItem(item)}} size="small">Добавить в корзину</Button>
        </CardActions>

      </Card>
 
    );
}

export default ProductsCard;
