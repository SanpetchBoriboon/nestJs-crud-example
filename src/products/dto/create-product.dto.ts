import { Product, ProductDetail } from '../product.model';

export class CreateProductDto implements Product {
  _id: string;
  title: string;
  detail: ProductDetail;
  price: number;
  categoryId: string;
}
