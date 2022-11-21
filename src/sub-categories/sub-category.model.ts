import * as mongoose from 'mongoose';

export const SubCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Categories',
  },
});

export interface SubCategory {
  _id: string;
  title: string;
  categoryId: string;
}
