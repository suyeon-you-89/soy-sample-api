import { PartialType } from '@nestjs/swagger';
import { CreateAuditRecordDto } from './create-audit-record.dto';

export class UpdateAuditRecordDto extends PartialType(CreateAuditRecordDto) {
    
}
