import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../entity/company.entity';
import { Users } from 'src/users/entity/users.entity';
import { CreateCompanyDto } from '../controllers/dtos/company.dto';
import { ICurrentUser } from 'src/decorators/current-user';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async createCompany(
    company: CreateCompanyDto,
    user: ICurrentUser,
  ): Promise<Company> {
    const verifyCnpjCompany = await this.companyRepository.findOne({
      relations: { location: true},
      where: { cnpj: company.cnpj },
    });

    if (verifyCnpjCompany) {
      throw new BadRequestException('CNPJ is already registered in the system');
    }

    return this.companyRepository.save({
      ...company,
      user: { id: user.sub },
    });
  }

  async getAllCompanies(user: ICurrentUser): Promise<Company[]> {
    
    return this.companyRepository.find({
      where: { user: { id: user.sub } },
    });
  }

  async updateCompany(
    id: string,
    company: Partial<Company>,
    user: ICurrentUser,
  ): Promise<Company> {
    const companyToUpdate = await this.companyRepository.findOne({
      where: { id, user: { id: user.sub } },
    });

    if (!companyToUpdate) {
      throw new BadRequestException('Company not found');
    }

    return this.companyRepository.save({
      ...companyToUpdate,
      ...company,
    });
  }

  async deleteCompany(id: string, user: ICurrentUser): Promise<void> {
    const companyToDelete = await this.companyRepository.findOne({
      where: { id, user: { id: user.sub } },
    });

    if (!companyToDelete) {
      throw new BadRequestException('Company not found');
    }

    await this.companyRepository.delete(id);
  }
}
