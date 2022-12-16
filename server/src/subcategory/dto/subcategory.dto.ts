import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SubcategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    description: string;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}