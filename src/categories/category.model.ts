import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  subCategoryId: [String],
});

export interface Category {
  _id: string;
  title: string;
  subCategoryId: Array<string>;
}
