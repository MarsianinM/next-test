import {Controller, Get, Post, Body, Patch, ValidationPipe, Param, Delete, UseGuards} from '@nestjs/common';
import {ProductService} from './product.service';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {AuthGuard} from "@nestjs/passport";

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {
    }

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get('single/:id')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(id);
    }

    @Post('create')
    create(@Body(new ValidationPipe()) createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Patch('update/:id')
    update(@Param('id') id: string, @Body(new ValidationPipe()) updateProductDto: UpdateProductDto) {
        return this.productService.update(id, updateProductDto);
    }

    @Delete('remove/:id')
    remove(@Param('id') id: string) {
        return this.productService.remove(id);
    }
}
