import { Test, TestingModule } from '@nestjs/testing';
import { AuditRecordsController } from './audit-records.controller';

describe('AuditRecordsController', () => {
  let controller: AuditRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditRecordsController],
    }).compile();

    controller = module.get<AuditRecordsController>(AuditRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
