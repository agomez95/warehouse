import { Body, Controller, Get, Post } from '@nestjs/common';
import { SubcategoryDto } from './dto';
import { SubcategoryService } from './subcategory.service';

@Controller('subcategory')
export class SubcategoryController {
    constructor(private subcategoryService: SubcategoryService) {}

    @Get('all')
    all() {
        return this.subcategoryService.all();
    }

    @Post('new2')
    new(@Body() dto: SubcategoryDto) {
        return this.subcategoryService.new(dto);
    }
}
