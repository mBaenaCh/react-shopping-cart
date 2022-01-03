import ProductForm from "../product-form";
import ProductsTable from "../products-table";
import { Typography } from '@mui/material';

function ProductsPage() {
    return (<div className="container">
        <div className="product-form">
            <ProductForm />
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