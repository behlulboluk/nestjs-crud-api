import {Body, Param, Controller, Get, Post, Delete, Put, Res} from '@nestjs/common';
import {ProductService} from './product.service';
import {Product} from './models/product';
import {createProductDto} from './models/create-product.dto';
import {updateProductDto} from './models/update-product.dto';


@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get('listproducts')
    async listProducts(): Promise<Product[] | null> {
        return await this.productService.listProducts();
    }

    @Post('createproduct')
    async createProduct(@Body() body: createProductDto): Promise<Product> {
        return await this.productService.createCustomProduct(body);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id: string, @Res() response): Promise<any> {
      return await this.productService.delete(id, response)
    }

    @Get('/:id')
    async getProduct(@Param('id') id: string, @Res() response): Promise<any> {
      return await this.productService.getProduct(id, response)
    }

    @Put('/update/:id')
    async updateProduct(@Param('id') id: string, @Body() body: updateProductDto, @Res() response): Promise<any> {
      return await this.productService.updateProduct(id, body, response)
    }
}