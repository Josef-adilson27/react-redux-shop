import './App.css';
import NavBar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound'
import Box from '@mui/material/Box';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


 


function App() {


   
  return (
  <Box>
 
   <BrowserRouter>
   <ToastContainer/>
   <NavBar></NavBar>
      <Routes>        
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/notFound' element={<NotFound/>}/>
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </Box>
 
  );
}

export default App;
