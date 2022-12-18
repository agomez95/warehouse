import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    async new(dto: ProductDto) {
        try{
            const product = await this.prisma.product.create({
                data: {
                    name: dto.name,
                    stock: Number(dto.stock),
                    cost: Number(dto.cost),
                    code: Number(dto.code),
                    subcategoryId: Number(dto.subcategoryId),
                }
            });
            return `New product added: ${product.name}`;
        } catch(e) {
            if(e instanceof Prisma.PrismaClientKnownRequestError) {
                if(e.code == 'P2002') {
                    throw new ForbiddenException(
                        'Name or Code exist',
                    );
                }
            }
        }
    }

    async all() {
        return await this.prisma.product.findMany();
    }
}
