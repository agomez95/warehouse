import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto';

@Controller('product')
export class ProductController {
    constructor(private product: ProductService) {}

    @Get('all')
    all() {
        return this.product.all();
    }

    @Post('new')
    new(@Body() dto: ProductDto) {
        return this.product.new(dto)
    }
}
