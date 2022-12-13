import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    async new(dto: CategoryDto) {
        const data = {
            name: dto.name,
            description: dto.description,
        }

        try {
            const category = await this.prisma.category.create({data});
            return `New category created: ${category.name}`;
        } catch(e) {
            if(e instanceof Prisma.PrismaClientKnownRequestError) {
                if(e.code == 'P2002') {
                    throw new ForbiddenException(
                        'Category exist',
                    );
                }
            }
        }
    }

    async all(){
        
    }
}
