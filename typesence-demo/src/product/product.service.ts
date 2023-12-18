import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }


    async saveProduct(product: Product): Promise<Product> {
        const newProduct = new this.productModel(product);
        return newProduct.save();
      }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }


    async searchMongo(query: string): Promise<Product[]> {
        return this.productModel
            .find({
                $text: { $search: query },
            })
            .exec();
    }
}
