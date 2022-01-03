import ProductForm from "../product-form";
import ProductsTable from "../products-table";
import { Typography } from '@mui/material';
import ShoppingCartList from "../products-cart";

function ProductsPage() {
    return (<div className="container">
        <div className="product-form">
            <ProductForm />
            <Typography variant="h5" gutterBottom component="div">
                Carrito de compras
            </Typography>
            <ShoppingCartList />
        </div>
        <div className="product-list">
            <Typography variant="h5" gutterBottom component="div">
                Lista de productos
            </Typography>
            <ProductsTable />
        </div>
    </div>
    );
}

export default ProductsPage;