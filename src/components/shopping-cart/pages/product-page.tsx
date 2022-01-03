import ProductForm from "../product-form";
import ProductsTable from "../products-table";

function ProductsPage() {
    return (<div className="container">
        <div className="product-form">
            <ProductForm />
        </div>
        <div className="product-list">
            <ProductsTable />
        </div>
    </div>
    );
}

export default ProductsPage;