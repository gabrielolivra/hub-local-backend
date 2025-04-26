import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCompanyDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    website: string;

    @IsNotEmpty()
    @IsString()
    cnpj: string;
}

export class UpdateCompanyDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;
}
