import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


// this component is no used... instead of this we use RTK query in API/productsApi
// this componet just for example....
export const productsFetch = createAsyncThunk(
  'products/productsFetch',
   async ()=>{  
       const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
       return res.data
   }
)
 
 const initialState = {
  item:[],
  status:null, 
}
      
 const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  
  },
  extraReducers:(builder)=>{
    builder.addCase(productsFetch.pending,(state,action)=>{
      state.status = 'pending'
    });
    builder.addCase(productsFetch.fulfilled,(state,action)=>{
      state.status = 'success'
      state.item = action.payload
    });
    builder.addCase(productsFetch.rejected,(state,action)=>{
      state.status = 'rejected'
    });
  }
})


export const {addItems} = productsSlice.actions

export default productsSlice.reducer