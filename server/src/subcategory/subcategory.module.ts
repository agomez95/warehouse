import { Module } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';

@Module({
  providers: [SubcategoryService],
  controllers: []
})
export class SubcategoryModule {}
