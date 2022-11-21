import { Product } from '../product.model';

export class CreateProductDto implements Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
}
