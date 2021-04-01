import { IProduct } from '../classes/interfaces/requests/postProduct';
import { Mongo } from './../classes/mongo';
import { ObjectID } from 'mongodb';

export class ProductData{
    constructor(){
        
    }

    public async getProducts(){
        let result = await Mongo.productsCollection.find({}).toArray();
        return result;
    }

    public async getProductById(_id: ObjectID){
        let result = await Mongo.productsCollection.find({_id: _id})
        return result;
    }

    public async getProductByName(name: string){
        let result = await Mongo.productsCollection.find({name: name})
        return result;
    }

    public async postProduct(request:IProduct){
        try{
            let result = await Mongo.productsCollection.insertOne(request);
            return result.insertedCount ? result.insertedId : 'No product inserted';
        }catch(error){
            console.log(`ERROR: data/products.ts/postProduct => ${error}`);
            return error;
        }
    }
}