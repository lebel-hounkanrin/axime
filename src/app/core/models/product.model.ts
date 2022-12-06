export class Product{
    id!: string;
    name!: string;
    buy_price!: number;
    sell_price!: number;
    category!: string;
    description!: string;
    unity!:string;
    quantity?: number;
}
export class Stock{
    product!: Product;
    quantity!: number
}