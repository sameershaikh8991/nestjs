import { Controller,Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    // @Get()
    // async search(@Query('query') query: string): Promise<{ mongoResults: any, typesenseResults: any }> {
    //   return this.productService.fullTextSearch(query);
    // }
}
