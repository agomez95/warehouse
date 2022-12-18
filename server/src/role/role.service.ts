import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleDto } from './dto';

@Injectable()
export class RoleService {
    constructor(private prisma: PrismaService) {}

    async new(dto: RoleDto) {
        try {
            const role = await this.prisma.role.create({
                data: {
                    type: dto.type,
                }
            });
            return `New role created: ${role.type}`;
        } catch(e) {
            if(e instanceof Prisma.PrismaClientKnownRequestError) {
                if(e.code == 'P2002') {
                    throw new ForbiddenException(
                        'Role exist',
                    );
                }
            }
        }
    }

    async all() {
        return await this.prisma.role.findMany();
    }
}
