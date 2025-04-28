import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entity/company.entity';
import { CompanyService } from './services/company.service';
import { CompanyController } from './controllers/company.controller';
import { Location } from 'src/locations/entity/locations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, Location])],
  providers: [CompanyService],
  exports: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
