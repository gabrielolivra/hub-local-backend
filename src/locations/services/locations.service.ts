import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '../entity/locations.entity';
import { CreateLocationDto, UpdateLocationDto } from '../controllers/dtos/locations.dto';
import { Company } from 'src/company/entity/company.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationsRepository: Repository<Location>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  
  ) {}

  async getAllLocations(id: string): Promise<Location[]> {
    return this.locationsRepository.find({
    relations: { company: true },
    order: { name: 'ASC' },
    where: { company: { id } },
    });
  }

  async createLocation(location: CreateLocationDto): Promise<Location> {
    const verifyCompany = await this.companyRepository.findOne({
      where: { id: location.companyId },
    });
    if (!verifyCompany) {
      throw new BadRequestException('Company not found');
    }

    return this.locationsRepository.save({
      ...location,
      company: verifyCompany,
    });
  }

  async updateLocation(
    id: string,
    location: Partial<UpdateLocationDto>,
  ): Promise<null|Location> {
    const locationToUpdate = await this.locationsRepository.findOne({
      where: { id },
    });
    if (!locationToUpdate) {
      throw new BadRequestException('Location not found');
    }
     await this.locationsRepository.update(id, {
      ...location,
    });
    return await this.locationsRepository.findOne({
      where: { id },
    });
  }

  async deleteLocation(id: string): Promise<void> {
    const locationToDelete = await this.locationsRepository.findOne({
      where: { id },
    });
    if (!locationToDelete) {
      throw new BadRequestException('Location not found');
    }
    await this.locationsRepository.delete(id);
  }

}
