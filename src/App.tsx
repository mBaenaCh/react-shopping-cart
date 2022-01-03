import AppBar from '../src/components/shared/app-bar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ProductsPage from './components/shopping-cart/pages/product-page';
import EditProductPage from './components/shopping-cart/pages/product-details';
import MainPage from './components/shopping-cart/pages/main-page';

function App() {
  return (

    <BrowserRouter>
      <CssBaseline />
      <AppBar />
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/products" element={<ProductsPage />}/>
      <Route path="/details/:productId" element={<EditProductPage />}/>
    </Routes>
  
    </BrowserRouter>

  );
}

export default App;
