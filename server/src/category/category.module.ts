import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { SubcategoryController } from './subcategory/subcategory.controller';
import { CategoryController } from './category.controller';

@Module({
  providers: [CategoryService],
  controllers: [SubcategoryController, CategoryController]
})
export class CategoryModule {}
