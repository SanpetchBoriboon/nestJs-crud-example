import { SubCategory } from '../sub-category.model';

export class CreateSubCategoryDto implements SubCategory {
  _id: string;
  title: string;
  categoryId: string;
}
