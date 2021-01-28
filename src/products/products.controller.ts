import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductSevice } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

    constructor (private readonly produtsService: ProductSevice) {

    }

    @Get()
    getAll(): Promise<Product []> {
        return this.produtsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Product> {
        return this.produtsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.produtsService.create(createProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id:string): Promise<Product> {
        return this.produtsService.remove(id)
    }

    @Put(':id')
    update(@Body() UpdateProductDto:UpdateProductDto, @Param('id') id: string): Promise<Product> {
        return this.produtsService.update(id, UpdateProductDto)
    }

}
