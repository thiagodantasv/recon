import { ProductBusiness as Business } from "./../business";
import { IProduct } from './../classes/interfaces/requests/postProduct';

export class ProductController{
    private _business: Business;
    constructor(){
        this._business = new Business();
    }

    public async getProducts(){
        return await this._business.getProducts();
    }

    public async postProduct(request:IProduct){
        return await this._business.postProduct(request);
    }
}