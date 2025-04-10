import { ApiProperty } from '@nestjs/swagger';

export class CodeEntity {
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

  @ApiProperty({ example: '2024-04-03T00:00:00.000Z', required: false, default: 'current time' })
  created_dt: Date;

  @ApiProperty({ example: '2024-04-03T00:00:00.000Z', required: false })
  updated_dt?: Date;

  @ApiProperty({ example: '2024-04-03T00:00:00.000Z', required: false })
  deleted_dt?: Date;

  @ApiProperty({ example: 'admin' })
  created_by: string;

  @ApiProperty({ example: 'admin', required: false })
  updated_by?: string;

  @ApiProperty({ example: 'admin', required: false })
  deleted_by?: string;
}