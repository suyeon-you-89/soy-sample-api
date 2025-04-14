import { ApiProperty } from '@nestjs/swagger';

export class AuditRecordDate {
    
      @ApiProperty({ example: '2024-04-03T00:00:00.000Z', required: false, default: 'current time' })
      created_dt: Date;
    
      @ApiProperty({ example: '2024-04-03T00:00:00.000Z', required: false })
      updated_dt?: Date;
    
      @ApiProperty({ example: '2024-04-03T00:00:00.000Z', required: false })
      deleted_dt?: Date;
}
 
export class AuditRecord extends AuditRecordDate{

    @ApiProperty({ example: 'member' })
    created_by: string;
  
    @ApiProperty({ example: 'member', required: false })
    updated_by?: string;
  
    @ApiProperty({ example: 'member', required: false })
    deleted_by?: string;
}
