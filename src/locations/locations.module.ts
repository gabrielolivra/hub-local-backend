import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entity/locations.entity';
import { LocationsService } from './services/locations.service';
import { LocationsController } from './controllers/locations.controller';
import { CompanyService } from 'src/company/services/company.service';
import { Company } from 'src/company/entity/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Location, Company])],
  controllers: [LocationsController],
  providers: [LocationsService],
  exports: [TypeOrmModule],
})
export class LocationsModule {}
