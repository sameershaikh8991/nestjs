import { Body, Controller, Get, Post, Query ,Headers, Request} from '@nestjs/common';
import { TypesenseService } from 'src/typesense/typesense.service';
import { ProductService } from './product.service';
import { Product } from './product.schema';

import { } from '@nestjs/common';


@Controller('product')
export class ProductController {
  constructor(private readonly typesenseService: TypesenseService,
     private readonly productService: ProductService,
     ) { }


  @Post()
  async createProduct(@Body() product: Product): Promise<Product> {
    return this.productService.saveProduct(product);
  }

  @Get('search')
  async search(@Query('query') query: string): Promise<any> {
    const typesenseResults = await this.typesenseService.searchTypesense(query);
    return { typesenseResults };
  }




  // @Get('/ping')
  // async typeSensePing(
  //   @Headers('typesense-api-key') typesenseApiKey: string,
  // ): Promise<any> {
  //   return await this.typesenseService.typeSensePing(typesenseApiKey);
  // }

  
}
