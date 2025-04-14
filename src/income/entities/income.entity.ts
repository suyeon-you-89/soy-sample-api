import { AuditRecord } from 'src/audit-record/entities/audit-record.entity';
import { ApiProperty } from '@nestjs/swagger';

export class Income extends AuditRecord{
    @ApiProperty({ example: 1 })
    id: number;
    
}
