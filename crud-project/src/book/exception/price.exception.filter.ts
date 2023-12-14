import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { PriceException } from "./price-exception";
import { response } from "express";


@Catch(PriceException)
export class PriceExceptionFilter implements ExceptionFilter{
    catch(exception: PriceException, host: ArgumentsHost) {
        const body ={
            message : exception.message,
            error :"Price error",
        };

        const ctx = host.switchToHttp();

        const resp = ctx.getResponse<Response>();

        response.status(HttpStatus.BAD_REQUEST).json(body);
    }
}