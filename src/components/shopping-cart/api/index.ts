import { Product } from "../types";

const BASE_URL = "http://localhost:8080/api/shopping-cart";

async function getAllProducts(): Promise<Product[]>{

    const response = await fetch(BASE_URL+"/products", {
        method: "GET",
    });

    return await response.json();
}

const client = {
    getAllProducts
};

export default client;
