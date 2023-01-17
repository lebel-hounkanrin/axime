export class Product{
    id!: string;
    name!: string;
    buy_price!: number;
    sell_price!: number;
    category!: string;
    description!: string;
    unity!:string;
    quantity: number = 1;
    productImage?: string;
}
export class Stock{
    product!: Product;
    quantity!: number
}