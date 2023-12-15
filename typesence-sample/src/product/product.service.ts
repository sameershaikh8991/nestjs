// search.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { SearchClient } from 'typesense';
import { Product, ProductDocument } from './Product.schema';


@Injectable()
export class ProductService {
 

  constructor(
    @InjectModel(Product.name) 
    private productModel: mongoose.Model<ProductDocument>, private typesenseClient: SearchClient
  ) {
    this.typesenseClient = new SearchClient({
      nodes: [
        {
          host: 'localhost',
          port: 8108,
          protocol: 'http',
        },
      ],
      apiKey: 'abc',
    });
  }

  async searchMongo(query: string): Promise<Product[]> {
    return this.productModel
      .find({
        $text: { $search: query },
      })
      .exec();
  }

  async searchTypesense(query: string): Promise<any[]> {
    const searchParameters: any = {
      q: query,
      queryBy: 'name,description', 
      typoTolerance: true,
    };

    const searchResults = await this.typesenseClient
      .collections('products')
      .documents()
      .search(searchParameters,null);

    return searchResults.hits;
  }

  async fullTextSearch(query: string): Promise<{ mongoResults: Product[], typesenseResults: any[] }> {
    const [mongoResults, typesenseResults] = await Promise.all([
      this.searchMongo(query),
      this.searchTypesense(query),
    ]);

    return { mongoResults, typesenseResults };
  }
}
