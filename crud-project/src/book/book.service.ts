import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.schema';
import * as  mongoose from 'mongoose';
import { CreateBookDto } from './dto/create-book-dto';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel:mongoose.Model<Book>
        
    ){}

    async findAll(){
        const books = await this.bookModel.find();
        return books;
    }

    async saveBook(book:CreateBookDto){
        const res = this.bookModel.create(book);
        return res;
    }

    async findbyId(bookId:string){
        const res = await this.bookModel.findById(bookId);
        if(!res){
            throw new NotFoundException('book  not found..........')
        }
        return res;
    }



    async updateBook(bookId:string,book:CreateBookDto){
        const res = await this.bookModel.findByIdAndUpdate(bookId,book);
    
        return res;
    }


    async deleteBook(bookId:string){
        const res = await this.bookModel.findByIdAndDelete(bookId)
    
        return res;
    }



    
}
