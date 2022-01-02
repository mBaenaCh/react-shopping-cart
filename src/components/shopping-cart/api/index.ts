import { Product } from "../types";

const BASE_URL = "http://localhost:8080/api/shopping-cart";

async function getAllProducts(): Promise<Product[]>{

    const response = await fetch(BASE_URL+"/products", {
        method: "GET",
    });

    return await response.json();
}

async function getProductById(productId: string): Promise<Product> {
    const response = await fetch(`${BASE_URL+"/products"}/${productId}`, {
        method: "GET",
    });

    return await response.json();
}

const client = {
    getAllProducts,
    getProductById
};

export default client;
