import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entity/company.entity';
import { CompanyService } from './services/company.service';
import { CompanyController } from './controllers/company.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompanyService],
  exports: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
