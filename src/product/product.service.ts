import { Injectable } from '@nestjs/common';
import {Product} from './models/product';
import {createProductDto} from './models/create-product.dto';

import {InjectModel} from 'nestjs-typegoose';
import {ReturnModelType} from '@typegoose/typegoose';


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product) private readonly productModel: ReturnModelType<typeof Product>) {
    }

    async createCustomProduct(product: createProductDto) {
        const createdProduct = new this.productModel(product);
        return await createdProduct.save();
    }

    async listProducts(): Promise<Product[] | null> {
        return await this.productModel.find().exec();
    }
    
    async delete(id, response): Promise<any> {
        let delResponse = await this.productModel.deleteOne({_id: id}).exec();
        try{
            if(delResponse.deletedCount==1) {
                delResponse = 'Product deleted Successfully'
                return response.status(200).json({
                    message: delResponse,
                });
            } else {
                delResponse = 'Product Not Found';
                return response.status(404).json({
                    message: delResponse,
                });
            }
        }catch(err){
            return response.status(500).json({
                message: err,
            });
        }
    }

    async getProduct(id, response): Promise<any> {
        let getProductById = await this.productModel.findOne({_id: id}).exec();
        try{
            if(getProductById) {
                return response.status(200).json(
                    getProductById,
                );
            }else {
                return response.status(404).json({
                    message: "Not Found product by id",
                });
            }
        }catch(err){
            return response.status(500).json({
                message: err,
            });
        }
    }

    async updateProduct(id, item, response): Promise<any> {
        let getProductById = await this.productModel.findOne({_id: id}).exec();
        try{
            if(getProductById) {
                let updateProductById = await this.productModel.findOneAndUpdate({_id: id}, item, {new: true}).exec();
                return response.status(404).json(updateProductById);
            }else {
                return response.status(404).json({
                    message: "Not Found product by id",
                });
            }
        }catch(err){
            return response.status(500).json({
                message: err,
            });
        }
    }
}
