import AppBar from '../src/components/shared/app-bar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ProductsTable from './components/shopping-cart/products-table';
import ProductForm from './components/shopping-cart/product-form';

function App() {
  return (

    <BrowserRouter>
      <CssBaseline />
      <AppBar />
      <div className="container">
        <div className="product-form">
          <ProductForm />
        </div>
        <div className="product-list">
          <ProductsTable />
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
