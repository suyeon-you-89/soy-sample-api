import { Test, TestingModule } from '@nestjs/testing';
import { AuditRecordService } from './audit-record.service';

describe('AuditRecordService', () => {
  let service: AuditRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditRecordService],
    }).compile();

    service = module.get<AuditRecordService>(AuditRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
