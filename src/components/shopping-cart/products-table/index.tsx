import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';
import { Product } from '../types';
import usePromise from '../../shared/use-promise';
import shoppingCartClient from '../api';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';


function productToRow(product: Product) {
  return (
    <TableRow key={product.productId}>
      <TableCell align="left">
        <Link component={RouterLink} to={`/details/${product.productId}`}>
          {product.productId}
        </Link>
      </TableCell>
      <TableCell align="left">{product.name}</TableCell>
      <TableCell align="left">{product.description}</TableCell>
      <TableCell align="left">{product.clasification}</TableCell>
      <TableCell align="left">$ {product.price} USD</TableCell>
      <TableCell align="left">{product.quantity}</TableCell>
    </TableRow>
  );
}

export default function ProductsTable() {

  const { isLoading, error, data } = usePromise(() =>
    shoppingCartClient.getAllProducts()
  );

  if (isLoading) {
    return <CircularProgress />
  }

  if (error) {
    return <h1>There was an error!</h1>;
  }

  if (data) {
    const products = data.map((product) => productToRow(product));

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Descripción</TableCell>
              <TableCell align="left">Clasificación</TableCell>
              <TableCell align="left">Precio</TableCell>
              <TableCell align="left">Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return null;
}