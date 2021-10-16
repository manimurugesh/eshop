import { Products } from './Products';

export interface Cart {
  id: number;
  count: number;
  product?: Products;
}
