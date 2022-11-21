import { Product } from './../models/product.model';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    products : Product[] = [
        {
            id: 1,
            title: "Oignons",
            image:"",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. \
            This content is a little bit longer.",
            price: 20000,
            quantity:1
        },
        {
            id: 2,
            title: "Ignames",
            image:"",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content.\
             This content is a little bit longer.",
            price: 50000,
            quantity:1
        },
        {
            id: 3,
            title: "Patates",
            image:"",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. \
            This content is a little bit longer.",
            price: 30000,
            quantity:1
        },
        {
            id: 4,
            title: "Mais",
            image:"",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. \
            This content is a little bit longer.",
            price: 25000,
            quantity:1
        },
        {
            id: 5,
            title: "Haricot",
            image:"",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. \
            This content is a little bit longer.",
            price: 40000,
            quantity:1
        },
        {
            id: 6,
            title: "Charbon",
            image:"",
            description: "This is a wider card with supporting text below as a natural lead-in to additional content. \
            This content is a little bit longer.",
            price: 20000,
            quantity:1
        }
    ];
    selectedProducts: Product[] = [];
    constructor(){}
    
}