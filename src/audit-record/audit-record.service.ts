import { Injectable } from '@nestjs/common';
import { CreateAuditRecordDto } from './dto/create-audit-record.dto';
import { UpdateAuditRecordDto } from './dto/update-audit-record.dto';

@Injectable()
export class AuditRecordService {
  create(createAuditRecordDto: CreateAuditRecordDto) {
    return 'This action adds a new auditRecord';
  }

  findAll() {
    return `This action returns all auditRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditRecord`;
  }

  update(id: number, updateAuditRecordDto: UpdateAuditRecordDto) {
    return `This action updates a #${id} auditRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditRecord`;
  }
}
