export interface Stocks{
    id: string;
    product: Products;
    quantity: number
}

export interface Products{
    id: string;
    name: string;
    buy_price: number;
    sell_price: number;
    category: string;
    description: string;
    unity:string;
}   