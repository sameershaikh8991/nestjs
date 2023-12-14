import * as  joi from "joi";
import { Category } from "../book.schema";

export const createBookSchema = joi.object({
    title:joi.string().required(),
    desc:joi.string().required(),
    price:joi.number().required(),
    category:joi.string().valid(...Object.keys(Category))
})