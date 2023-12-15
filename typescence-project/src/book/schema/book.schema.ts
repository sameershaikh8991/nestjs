import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category{
    ADVENTURE = 'Adventure',
    CRIME ='Crime',
}

@Schema({
    timestamps:true
})
export class Book{

    @Prop()
    title:string;

    @Prop()
    desc:string;

    @Prop()
    price:number;

    @Prop()
    category:Category;
}


export const BookSchema = SchemaFactory.createForClass(Book);