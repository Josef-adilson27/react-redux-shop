import { Box } from '@mui/material';
import Typography    from         '@mui/material/Typography';
import WestIcon from '@mui/icons-material/West';
import Button        from         '@mui/material/Button';
import React from 'react';
import {Link}  from    'react-router-dom'
const EmptyCart = () => {
    return (
        <div className='if-cart-emtpy'>
          <Box sx={{textAlign:'center'}}>
            <Typography variant='h4' >Вы что, еще ничего не выбрали?</Typography>
            <Link to='/'>
                <Box sx={{display:'flex', justifyContent:'center'}} >
                    <Button sx={{bgcolor:'primary.second', mr:'10px'}}><WestIcon/></Button>
                 <Typography variant='h5' color='black'>Марш за покупками</Typography>
                </Box>
            </Link>
          </Box>
        </div>
    );
}

export default EmptyCart;
