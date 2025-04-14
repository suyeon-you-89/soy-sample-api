import { ApiProperty } from '@nestjs/swagger';
import { AuditRecord, AuditRecordDate } from 'src/audit-record/entities/audit-record.entity';

export class CodeEntity extends AuditRecordDate{
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'category' })
  code_type: string;

  @ApiProperty({ example: 'A001' })
  code: string;

  @ApiProperty({ example: '카테고리 A' })
  code_translation: string;

  @ApiProperty({ example: 'ko' })
  code_nation: string;

  @ApiProperty({ example: 1, required: false, default: 0 })
  order?: number; 

}