import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCodeDto{

    @IsString()
    @IsNotEmpty()
    code_type: string; 
    @IsString()
    @IsNotEmpty()
    code: string; 
    @IsString()
    @IsOptional()
    code_translation: string; 
    @IsString()
    @IsNotEmpty()
    code_nation: string; 

    @IsNumber()
    @IsOptional()
    order: number; 

}
