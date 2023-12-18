// product.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './Product.schema';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SearchClient } from 'typesense';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
  controllers: [ProductController],
  providers: [ProductService, SearchClient], // Include SearchClient in the providers array
})
export class ProductModule {}
