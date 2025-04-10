import { PartialType } from '@nestjs/mapped-types';
import { CreateCodeDto } from './create-code.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCodeDto extends PartialType(CreateCodeDto) {
    @IsString()
    @IsNotEmpty()
    code_type: string; 
    @IsString()
    @IsNotEmpty()
    code: string; 
    @IsString()
    @IsNotEmpty()
    code_nation: string; 
}
