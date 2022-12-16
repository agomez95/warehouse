import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @IsNumber()
    @IsNotEmpty()
    cost: number;

    @IsNumber()
    @IsNotEmpty()
    code: number;

    @IsNumber()
    @IsNotEmpty()
    subcategoryId: number;
}