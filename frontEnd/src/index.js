import React from 'react';
import ReactDOM from 'react-dom/client';
import './cart.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './redux/Store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {grey,red} from '@mui/material/colors';
import {ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApi } from './Api/ProductsApi';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      second:red[500]
    },
    secondary:{
      main:grey[800],
    },
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      
         <App/>
        
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


