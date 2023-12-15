// product.model.ts

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type ProductDocument = Product & Document;

@Schema({
  timestamps:true
})
export class Product {

  @Prop({ required: true })
  name: string;
  

  @Prop({ required: true })
  description: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
