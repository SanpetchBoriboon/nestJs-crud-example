import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: String,
  detail: Object,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

export interface Product {
  _id: string;
  title: string;
  detail: ProductDetail;
  categoryId: string;
}

export interface ProductDetail {
  image: String;
  color: string;
  brand: string;
  description: string;
  price: number;
}
