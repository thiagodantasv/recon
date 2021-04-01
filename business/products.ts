import { IProduct } from "../classes/interfaces/requests/postProduct";
import { ProductData as Data } from "./../data";
import Response from './../classes/response';

export class ProductBusiness{
    private _data: Data;
    
    constructor(){
        this._data = new Data();
    }

    public async getProducts(){
        return await this._data.getProducts();
    }

    // public async getProduct(request){
    //     return await this._data.getProduct();
    // }

    public async postProduct(request:IProduct){
        let productAlreadyExists = await this._data.getProductByName(request.name);

        if(productAlreadyExists){
            return ;
        }


        return await this._data.postProduct(request);
    }
}