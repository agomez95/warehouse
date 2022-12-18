import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleDto } from './dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) {}

    @Get('all')
    all() {
        return this.roleService.all();
    }

    @Post('new')
    new(@Body() dto: RoleDto) {
        return this.roleService.new(dto);
    }
}
