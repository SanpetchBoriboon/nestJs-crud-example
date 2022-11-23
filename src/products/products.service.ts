import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';
import { Category } from 'src/categories/category.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @InjectModel('Category') private readonly CategoryModel: Model<Category>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto);
    const result = await newProduct.save();
    const category = await this.CategoryModel.findById(newProduct.categoryId);
    category.products.push({ productId: result.id });
    category.save();
    return result.id as string;
  }

  async findAll() {
    const products = await this.productModel.find().populate('categoryId');
    return products;
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).populate('categoryId');
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.productModel.findByIdAndUpdate(id, updateProductDto);
    const product = await this.productModel.findById(id);
    return product;
  }

  async remove(id: string) {
    const product = await this.productModel
      .findOneAndRemove({ _id: id })
      .exec();
    await this.CategoryModel.findOneAndUpdate(
      { id: product.categoryId },
      { $pull: { products: { productId: id } } },
      { multi: true },
    );
    return product;
  }
}
