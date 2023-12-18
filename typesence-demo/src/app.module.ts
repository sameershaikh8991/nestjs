import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypesenseModule } from './typesense/typesense.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs_typesense_sample'),
    ProductModule,
    TypesenseModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
