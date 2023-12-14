import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseIntPipe, Post, Put, UseFilters, UsePipes } from '@nestjs/common';
import { BookService } from './book.service';
import { Book, Category } from './book.schema';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { CreateBookDto } from './dto/create-book-dto';
import { JoiValidationPipe } from 'src/validation/JoiValidationPipe';
import { createBookSchema } from './schema/createBookSchemaJoi';
import { PriceException } from './exception/price-exception';
import { PriceExceptionFilter } from './exception/price.exception.filter';


@Controller('book')
export class BookController {

    constructor(private bookService: BookService) { }


    @Get()
    async getAllBook(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Post('new')
    // @UsePipes(new ValidationPipe)
    @UsePipes(new JoiValidationPipe(createBookSchema))
    async addBook(
        @Body()
        book: CreateBookDto
    ): Promise<Book> {
        console.log("book",book);
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
        @Body("category",new ParseEnumPipe(Category))
        book:CreateBookDto,
    ): Promise<Book> {
        return this.bookService.updateBook(id,book);
    }



    @Delete(':id')
    async deleteEntity(@Param('id') id: string): Promise<void> {
      await this.bookService.deleteBook(id);
    }


    @Get('/price/:price')
    @UseFilters(PriceExceptionFilter)
    async getByPrice(
        @Param('price',ParseIntPipe) price:number ) {
    
            if(price <0){
                throw new PriceException();
            }
        return {success : true,price};
    }
}
