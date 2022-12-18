import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsNumber()
    @IsNotEmpty()
    roleId: number;
}