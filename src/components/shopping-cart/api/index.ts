import { Product } from "../types";

const BASE_URL = "http://localhost:8080/api/shopping-cart";

async function getAllProducts(): Promise<Product[]>{

    const response = await fetch(BASE_URL+"/products", {
        method: "GET",
    });

    return await response.json();
}

async function getProductById(productId: string | undefined): Promise<Product> {
    const response = await fetch(`${BASE_URL+"/products"}/${productId}`, {
        method: "GET",
    });

    return await response.json();
}

type CreateProductRequest = {
    name: string;
    description: string;
    price: number;
    quantity: number;
};

type CreateProductResponse = {
    product: Product;
};

async function createProduct(
    request: CreateProductRequest
): Promise<CreateProductResponse> {
    const response = await fetch(BASE_URL+"/products", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
}

async function updateProductById(
    productId: string | undefined,
    request: CreateProductRequest
): Promise<CreateProductResponse> {
    const response = await fetch(BASE_URL+`/products/${productId}`, {
        method: "PUT",
        body: JSON.stringify(request),
        headers:{
            "Content-Type": "application/json",
        },
    });

    return await response.json();
}

const client = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById
};

export default client;
