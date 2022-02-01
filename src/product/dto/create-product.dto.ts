import * as mongoose from 'mongoose';
import { IsString, IsNotEmpty, IsOptional, IsDecimal } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @ApiPropertyOptional()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    @ApiPropertyOptional()
    readonly slug: string;

    @IsDecimal()
    @IsNotEmpty()
    @ApiPropertyOptional()
    readonly prise: number;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly category: mongoose.Types.ObjectId;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly text: string;
}
