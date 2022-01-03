import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress, IconButton } from '@mui/material';
import shoppingCartClient from '../api';
import { Product } from '../types';
import usePromise from '../../shared/use-promise';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';

export default function ShoppingCartList() {

    function shoppingCartToRow(product: Product) {

        function handleOnRemove(product: any) {
            const { productId } = product;
            shoppingCartClient.removeProductFromShoppingCart("945de5a5-c8cd-4cba-bf4a-90526c78cba5", productId);
            window.location.reload();
        }

        function handleOnIncrease(product: any) {
            const { productId } = product;
            shoppingCartClient.increaseProductQuantity("945de5a5-c8cd-4cba-bf4a-90526c78cba5", productId);
            window.location.reload();
        }

        function handleOnDecrease(product: any) {
            const { productId } = product;
            shoppingCartClient.decreaseProductQuantity("945de5a5-c8cd-4cba-bf4a-90526c78cba5", productId);
            window.location.reload();
        }

        return (
            <TableRow key={product.productId}>
                <TableCell align="left">{product.name}</TableCell>
                <TableCell align="left">$ {product.price} USD</TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell><IconButton onClick={() => handleOnIncrease(product)}><AddIcon /></IconButton></TableCell>
                <TableCell><IconButton onClick={() => handleOnDecrease(product)}><RemoveIcon /></IconButton></TableCell>
                <TableCell><IconButton onClick={() => handleOnRemove(product)}><DeleteIcon /></IconButton></TableCell>
            </TableRow>
        );
    }

    const { isLoading, error, data } = usePromise(() =>
        shoppingCartClient.getShoppingCartById("945de5a5-c8cd-4cba-bf4a-90526c78cba5")
    );

    if (isLoading) {
        return <CircularProgress />
    }

    if (error) {
        return <h1>There was an error!</h1>;
    }

    if (data) {
        const products = data.products.map((product) => shoppingCartToRow(product));

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Nombre</TableCell>
                                <TableCell align="left">Precio</TableCell>
                                <TableCell align="left">Cantidad</TableCell>
                                <TableCell>Incrementar</TableCell>
                                <TableCell>Reducir</TableCell>
                                <TableCell>Eliminar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <Typography variant="h6" gutterBottom component="div">
                        Total: $ {data.total} USD
                    </Typography>
                </div>
            </div>

        );
    }
    return null;
}

