import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel({
      title: createProductDto.title,
      description: createProductDto.description,
      price: createProductDto.price,
    });
    const result = await newProduct.save();
    return result.id as string;
  }

  async findAll() {
    const products = await this.productModel.find();
    return products;
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id);
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.productModel.findByIdAndUpdate(id, {
      title: updateProductDto.title,
      description: updateProductDto.description,
      price: updateProductDto.price,
    });
    const product = await this.productModel.findById(id);
    return product;
  }

  async remove(id: string) {
    const product = await this.productModel.findOneAndRemove({ _id: id });
    return product;
  }
}
