import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import {productsApi} from '../Api/ProductsApi'

import ProductsSlice from './ProductsSlice'
import cartSlice from './CartSlice'

export const store = configureStore({
  reducer:{ 
    DATA:ProductsSlice,                            //we DONT use this,it is for example
    [productsApi.reducerPath]:productsApi.reducer, // we use it for cards getting from api
    cart:cartSlice
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(productsApi.middleware)
  }
})
 