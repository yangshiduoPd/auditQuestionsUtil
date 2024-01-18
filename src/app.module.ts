import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditRecordsModule } from './modules/audit-records/audit-records/audit-records.module';

@Module({
  imports: [AuditRecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
