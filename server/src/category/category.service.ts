import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    async new(dto: CategoryDto) {
        try {
            const category = await this.prisma.category.create({ 
                data: {
                    name: dto.name,
                    description: dto.description,
                }  
            });
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
        return await this.prisma.category.findMany();
    }
}
