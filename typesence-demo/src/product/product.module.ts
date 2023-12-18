import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.schema';
import { TypesenseModule } from 'src/typesense/typesense.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),TypesenseModule],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
