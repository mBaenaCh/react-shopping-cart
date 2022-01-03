export interface Product{
    productId: string,
    name: string,
    description: string,
    clasification: string,
    price: number,
    quantity: number
}

export interface ShoppingCart{
    clientId: string,
    createdAt: string,
    updatedAt: string,
    products: Product[],
    total: number
}