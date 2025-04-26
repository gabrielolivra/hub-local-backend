
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entity/company.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [],
  exports: [],
  controllers:[]
})
export class CompanyModule {}