import { ProductBusiness as Business } from "./../business";

export class ProductController{
    private _business: Business;
    constructor(){
        this._business = new Business();
    }

    public getProducts(){
        return this._business.getProducts();
    }
}