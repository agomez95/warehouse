import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {}

    @Get('all')
    all() {
        return this.userService.all();
    }

    @Post('new')
    new(@Body() dto: UserDto) {
        return this.userService.new(dto);
    }
}
