import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async new(dto: UserDto) {
        try {
            const hash = await argon.hash(dto.password);
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    password: hash,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    country: dto.country,
                    roleId: Number(dto.roleId)
                }
            });
            return `New user created: ${user.email}`;
        } catch(e) {
            if(e instanceof Prisma.PrismaClientKnownRequestError) {
                if(e.code == 'P2002') {
                    throw new ForbiddenException(
                        'User exist',
                    );
                }
            }
        }
    }

    async all() {
        return this.prisma.user.findMany({
            select: {
                email: true,
                firstName: true,
            }
        });
    }
}
