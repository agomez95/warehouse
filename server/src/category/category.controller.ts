import { Controller, Post, Get, Body } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryDto } from "./dto";

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

    @Get('all')
    all() {
        return this.categoryService.all();
    }

    @Post('new')
    new(@Body() dto: CategoryDto) {
        return this.categoryService.new(dto);
    }
}
