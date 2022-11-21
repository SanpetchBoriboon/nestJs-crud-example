import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = new this.categoryModel(createCategoryDto);
    const result = await newCategory.save();
    return result.id as string;
  }

  async findAll() {
    const categories = await this.categoryModel.find();
    return categories;
  }

  async findOne(id: string) {
    const category = await this.categoryModel.findById(id);
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto);
    const category = await this.categoryModel.findById(id);
    return category;
  }

  async remove(id: string) {
    const category = await this.categoryModel
      .findOneAndRemove({ _id: id })
      .exec();
    return category;
  }
}
