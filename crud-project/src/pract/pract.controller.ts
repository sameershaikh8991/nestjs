import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes } from '@nestjs/common';


interface QueryParam {
    id: number;
    name: string;
}

export class Data {
    title: string;
    price: number;

}

@Controller('pract')
export class PractController {


    @Get(':id')
    @UsePipes(ParseIntPipe)
    getMethod(@Param('id') id:number) {
        console.log( typeof id);
    }


    @Post("/create-book")
    async createbooks(
        @Body()
        book: Data,
    ): Promise<Data> {
        console.log("book detals is : " + book.title);
        return book;
    }


    @Put('update')
    updateApi(
        @Body("exp",new DefaultValuePipe(1)) exp:number
    ){
        return null;
    }


}


