export class PriceException extends Error{
    constructor(message?:string){
        super(message || "invalid id");
    }
}