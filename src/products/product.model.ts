import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  categoryId: String,
});

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: String;
  categoryId: string;
}
