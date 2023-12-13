import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PractModule } from './pract/pract.module';

@Module({
  imports: [BookModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // function is used to configure and connect to a MongoDB database using Mongoose, :MongooseModule.forRoot(process.env.DB_URI)
    MongooseModule.forRoot(process.env.DB_URI),
    BookModule,
    PractModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
