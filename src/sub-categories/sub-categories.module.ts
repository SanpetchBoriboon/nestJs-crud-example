import { Module } from '@nestjs/common';
import { SubCategoriesService } from './sub-categories.service';
import { SubCategoriesController } from './sub-categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubCategorySchema } from './sub-category.model';
import { CategorySchema } from '../categories/category.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SubCategory', schema: SubCategorySchema },
      { name: 'Category', schema: CategorySchema },
    ]),
  ],
  controllers: [SubCategoriesController],
  providers: [SubCategoriesService],
})
export class SubCategoriesModule {}
