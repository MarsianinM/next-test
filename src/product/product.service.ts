import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {Model} from "mongoose";
import {IProduct} from "./interfaces/product.interfaces";

@Injectable()
export class ProductService {
  constructor(@InjectModel('Products') private readonly productModel: Model<IProduct>) {
  }

  async findAll(): Promise<IProduct[]> {
    return await this.productModel.find().exec();
  }

  async findOne(_id: string): Promise<IProduct> {
    return await this.productModel.findById(_id).exec();
  }

  async create(createProductDto: CreateProductDto): Promise<IProduct> {
    const product = new this.productModel(createProductDto);
    return await product.save()
  }

  async update(_id: string, updateProductDto: UpdateProductDto): Promise<Object> {
    return this.productModel.updateOne({_id}, updateProductDto);
  }

  async remove(_id: string): Promise<Object> {
    return this.productModel.remove({_id: _id});
  }
}
