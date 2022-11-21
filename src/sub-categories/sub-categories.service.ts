import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../categories/category.model';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { SubCategory } from './sub-category.model';

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectModel('SubCategory')
    private readonly subCategoryModel: Model<SubCategory>,
    @InjectModel('Category')
    private readonly categoryModel: Model<Category>,
  ) {}
  async create(createSubCategoryDto: CreateSubCategoryDto) {
    const newSubCategory = await this.subCategoryModel.create(
      createSubCategoryDto,
    );
    const result = await newSubCategory.save();
    const category = await this.categoryModel.findById(result.categoryId);
    category.subCategoryId.push(result._id);
    await category.save();
    return result.id as string;
  }

  async findAll() {
    const subCategories = await this.subCategoryModel.find();
    return subCategories;
  }

  async findOne(id: string) {
    const subCategories = await this.subCategoryModel.findById(id);
    return subCategories;
  }

  async update(id: string, updateSubCategoryDto: UpdateSubCategoryDto) {
    await this.subCategoryModel.findByIdAndUpdate(id, updateSubCategoryDto);
    const subCategories = await this.subCategoryModel.findById(id);
    return subCategories;
  }

  async remove(id: string) {
    const subCategories = await this.subCategoryModel.remove({ _id: id });
    return subCategories;
  }
}
