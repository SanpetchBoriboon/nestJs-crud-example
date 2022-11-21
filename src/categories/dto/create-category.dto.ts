import { Category } from '../category.model';

export class CreateCategoryDto implements Category {
  _id: string;
  title: string;
  subCategoryId: Array<string>;
}
