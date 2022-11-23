import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  products: [
    { productId: { type: mongoose.Schema.Types.ObjectId, required: true } },
  ],
});

export interface Category {
  _id: string;
  title: string;
  products: [{ productId: string }];
}
