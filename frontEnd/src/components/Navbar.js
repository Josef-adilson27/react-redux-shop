import React from 'react';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

                                       // this is header component
const Navbar = () => {
    const {cartTotalQuantity} = useSelector(state=>state.cart)

    const bagDivStyle = {
        display:'flex',
        alignItems:'center',
        position:'relative'
    }

    const priceTextStyle = {
        fontSize:'20px',
        bgcolor:'primary.second',
        width:'30px',
        height:'30px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'50px',
        position:'absolute',
        ml:'40px',
        top:'2px'
    }

    const headerTextStyle = {
        display:'flex',
        alignSelf:'end', 
        fontSize:'30px',
            
    }

    return (   
                                   
     <AppBar position="static" sx={{bgcolor:'primary.main'}}>
         <Toolbar> 
                               {/*home logo and text "PhoneShop" */}

             <Box sx={{ flexGrow: 1,display:'flex'}}>    
                  <Link to='/'>  
                     <Box sx={{display:'flex',alignItems:'center'}}>
                        <Button color='inherit'> <AddHomeIcon sx={{fontSize:'50px'}}/> </Button>
                        <Typography sx={headerTextStyle}> PhoneShop </Typography>
                     </Box>
                  </Link>
             </Box>
                 
                                     {/* bag and price */}
                                     
               <Box sx={bagDivStyle}>
                   <Link to='cart'>   
                     <Button color="inherit"> <ShoppingBagIcon sx={{fontSize:'50px'}}/> </Button>
                   </Link>
                    <Typography sx={priceTextStyle}>{cartTotalQuantity}</Typography>
               </Box>  

        </Toolbar>
    </AppBar>
    );
}

export default Navbar;
