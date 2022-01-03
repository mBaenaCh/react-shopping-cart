import AppBar from '../src/components/shared/app-bar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ProductsPage from './components/shopping-cart/pages/product-page';

function App() {
  return (

    <BrowserRouter>
      <CssBaseline />
      <AppBar />
    
    <Routes>
      <Route path="/products" element={<ProductsPage />}/>
    </Routes>
  
    </BrowserRouter>

  );
}

export default App;
