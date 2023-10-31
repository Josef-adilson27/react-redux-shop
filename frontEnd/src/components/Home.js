import React from 'react';
import { useGetAllProductsQuery } from '../Api/ProductsApi';
import ProductsCard from './ProductsCard';
import Box from '@mui/material/Box';


const Home = () => {
    const {data, error, isLoading} = useGetAllProductsQuery()
    
 
    return (
        <Box className="home-container">
            
            {isLoading && <p>Please wait...</p>}
            
            {error     && <p>...Something wrong. Please turn on API SERVER! (from backeEnd folder by 'node index.js' command)</p>}

            {data      &&  data?.map((item) => (   
                    <ProductsCard key={item.id} item={item}/>
            ))}

        </Box>
    );
}

export default Home;
