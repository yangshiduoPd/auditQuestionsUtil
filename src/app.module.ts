import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditRecordsModule } from './modules/audit-records/audit-records/audit-records.module';
import { UserModule } from './modules/user/user/user.module';
import { User2Module } from './modules/user2/user2.module';
import { AuditRecordsModule } from './modules/audit-records/audit-records.module';

@Module({
  imports: [AuditRecordsModule, UserModule, User2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
