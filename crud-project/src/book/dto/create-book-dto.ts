import { Category } from "../book.schema";


export class CreateBookDto{
    readonly title:string;
    readonly desc:string;
    readonly price:number;
    readonly category:Category;
}