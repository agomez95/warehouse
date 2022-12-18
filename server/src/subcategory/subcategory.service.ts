import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubcategoryDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SubcategoryService {
    constructor(private prisma: PrismaService) {}

    async new(dto: SubcategoryDto) {
        try {
            const subcategory = await this.prisma.subcategory.create({
                data: {
                    name: dto.name,
                    description: dto.description,
                    categoryId: Number(dto.categoryId),
                }
            });
            return `New subcategory created: ${subcategory.name}`;
        } catch(e) {
            if(e instanceof Prisma.PrismaClientKnownRequestError) {
                if(e.code == 'P2002') {
                    throw new ForbiddenException(
                        'Subcategory exist',
                    );
                }
            }
        }
    }

    async all() {
        return await this.prisma.subcategory.findMany();
    }
}
