
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [],
  exports: [],
  controllers:[]
})
export class LocationsModule {}