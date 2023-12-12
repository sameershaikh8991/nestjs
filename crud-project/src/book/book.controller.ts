import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.schema';
import { CreateBookDto } from './dto/create-book-dto';

@Controller('book')
export class BookController {

    constructor(private bookService: BookService) { }


    @Get()
    async getAllBook(): Promise<Book[]> {
        return this.bookService.findAll();
    }


    @Post('new')
    async addBook(
        @Body()
        book: CreateBookDto,
    ): Promise<Book> {
        return this.bookService.saveBook(book);
    }

    @Get(':id')
    async getById(
        @Param('id')
        id: string): Promise<Book> {
        return this.bookService.findbyId(id);
    }

    @Put(':id')
    async updateBook(
        @Param('id')
        id: string,
        @Body()
        book:CreateBookDto,
    ): Promise<Book> {
        return this.bookService.updateBook(id,book);
    }



    @Delete(':id')
    async deleteEntity(@Param('id') id: string): Promise<void> {
      await this.bookService.deleteBook(id);
    }

}