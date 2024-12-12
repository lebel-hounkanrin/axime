import { Product } from './product.model';
import { Observable } from 'rxjs';
export class BasketStore {
    products$ = new Observable<Product[]>;
}