import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, ProductModule, AuthModule, CategoryModule, SubcategoryModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
