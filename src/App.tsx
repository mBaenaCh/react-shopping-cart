import AppBar from '../src/components/shared/app-bar';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ProductsTable from './components/shopping-cart/products-table';

function App() {
  return (

    <BrowserRouter>
      <CssBaseline />
      <AppBar />
      <ProductsTable />
    </BrowserRouter>

  );
}

export default App;
