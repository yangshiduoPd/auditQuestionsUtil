import { Test, TestingModule } from '@nestjs/testing';
import { AuditRecordsService } from './audit-records.service';

describe('AuditRecordsService', () => {
  let service: AuditRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditRecordsService],
    }).compile();

    service = module.get<AuditRecordsService>(AuditRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
