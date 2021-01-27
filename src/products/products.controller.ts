import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductSevice } from './products.service';

@Controller('products')
export class ProductsController {

    constructor (private readonly produtsService: ProductSevice) {

    }

    @Get()
    getAll() {
        return this.produtsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.produtsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createProductDto: CreateProductDto) {
        return this.produtsService.create(createProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id:string) {
        return `Remove ${id}`
    }

    @Put(':id')
    update(@Body() UpdateProductDto:UpdateProductDto, @Param('id') id: string) {
        return `Update ${id}`
    }

}
