export class Product{
    id!: string;
    name!: string;
    buy_price!: number;
    sell_price!: number;
    category!: string;
    description!: string;
    unity!:string;
}
export class Stock{
    product!: Product;
    quantity!: number
}