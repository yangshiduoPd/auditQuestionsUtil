import { Module } from '@nestjs/common';
import { AuditRecordsController } from './audit-records.controller';
import { AuditRecordsService } from './audit-records.service';

@Module({
  controllers: [AuditRecordsController],
  providers: [AuditRecordsService]
})
export class AuditRecordsModule {}
